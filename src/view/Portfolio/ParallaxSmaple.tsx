import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import js from '../../assets/JavaScript.png'
import css from '../../assets/Css.png'
import node from '../../assets/Node.js.png'
import ts from '../../assets/TypeScript.png'

const smallStyle = {
  width: '100%',
  height: '60%'
}

const textStyle = {
  color: 'yellow',
  fontSize: '40px',
  margin: '0 auto',
  width: '200px'
}

const ParallaxSmaple = () => {
  const parallax = useRef<IParallax>(null)
  return (
    <div
      className='parallaxSample'
      style={{ width: '100%', height: '100%', background: 'lightcyan' }}
    >
      <Parallax ref={parallax} pages={5}>
        <ParallaxLayer
          offset={0}
          speed={0.7}
          style={{ 
            backgroundColor: '#453466',
            // ...smallStyle
          }}
        >
          <ParallaxLayer
            offset={1}
            speed={1}
            style={textStyle}
          >text0 text0</ParallaxLayer>
          {/* <ParallaxLayer
            sticky={{ start: 0, end: 1 }}
            style={{
              width: '200px',
              marginTop: '50%',
              marginLeft: '70%'
            }}
          >
            <img 
              src={node}
              alt='' 
              style={{
                display: 'block',
                width: '150px',
                zIndex: '2'
              }}/>
          </ParallaxLayer> */}
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#87BCDE' }}>
          <ParallaxLayer
            offset={1}
            speed={1}
            style={textStyle}
          >text1</ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={-0.5}
            style={{
              marginLeft: '200px'
            }}
          >
            <img
              src={js}
              alt =''
              style={{
                display: 'block',
                width: '300px',
                zIndex: '2'
              }}
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0.3}
            style={{
              marginLeft: '70%'
            }}
          >
            <img
              src={ts}
              alt =''
              style={{
                display: 'block',
                width: '100px',
                zIndex: '2'
              }}
            />
          </ParallaxLayer>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: 'pink' }} />
        <ParallaxLayer offset={2.5} speed={1} style={{ backgroundColor: 'lightgray' }} />
      </Parallax>
    </div>
  )
}

export default ParallaxSmaple

// memo
// ページの長さはコンテンツの高さの2倍になる？
// 各ページのコンテイナーとなるparallaxLayerのspeedは正の数にしといたほうがよい
// 負の数にすると上から下へコンテンツが出現し意図した挙動になりずらい
// ページのなかのコンポーネントはspeedは自由でいい
// コンテンツの左右の配置についてはparallaxLayerのstyleでマージンを設定する
// stickyのコンテンツはレイヤーのなかでうまく動かないこもしれない