import { useState, useCallback } from 'react'

import './setting.css'

const Setting:React.VFC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [previewSrc, setPreviewSrc] = useState<string[]>([])
  const [textList, setTextList] = useState<string[]>([])

  const handleTextField = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    if (!(target instanceof HTMLInputElement)) return
    setInputValue(target.value)
  }

  const addText = () => {
    setTextList(_list => ([
      ..._list,
      inputValue
    ]))
    setInputValue('')
  }

  const previewer = (file: Blob) => {
    if (!file) return

    const filereader = new FileReader()

    filereader.readAsDataURL(file)

    filereader.onload = (event: ProgressEvent<FileReader>): void => {
      const result = filereader.result as string

      setPreviewSrc(src => {
        return [
          ...src,
          result
        ]
      })
    }
  }

  const handleImageFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    if (
      target.files === null ||
      !(target instanceof HTMLInputElement)
    ) return

    for (let i = 0; i < target.files.length; i += 1) {
      previewer(target.files[i])
    }
  }

  const showAnimation = () => {
    console.log('call')
  }

  return (
    <div className='setting'>
      <h1>this is setting</h1>
      <div className='text'>
        <h3>text input</h3>
        <input
          type='text'
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleTextField(e)}
        />
        <button
          type='button'
          onClick={()=> addText()}
        >
          add
        </button>
        <div>
          <p>text list here</p>
          <ul>
            {
              textList.map(msg => (
                <li key={`listmsg_${msg}`}>{msg}</li>
              ))
            }
          </ul>
        </div>
      </div>
      <hr />
      <div className='images'>
        <p>images here</p>
        <input
          type='file'
          multiple
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleImageFile(e)}
        />
        <div>
          <p>preview images here</p>
          {
            previewSrc.length > 0 && (
              previewSrc.map(src => (
                <div key={`src_${src}`}>
                  <img
                    src={src}
                    alt=''
                    style={{
                      display: 'block',
                      width: '150px',
                      height: '150px'
                    }}
                  />
                </div>
              ))
            )
          }
        </div>
      </div>
      <hr />
      <div>
        <button
          type='button'
          onClick={showAnimation}
        >
          プレビュー
        </button>
      </div>
    </div>
  )
}

export default Setting
