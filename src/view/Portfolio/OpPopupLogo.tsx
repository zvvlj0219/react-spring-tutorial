import './OpPopupLogo.css'

const textStyle = {
  fontSize:'70px',
  marginTop: '140px'
}

const OpPopupLogo = () => {
  return (
    <div
      className='parent3Dtransform'
    >
      <h1
        className='headLogo'
        style={{
          ...textStyle,
          textAlign: 'center'
        }}
      >
        Free-Animate®
      </h1>
    </div>
  )
}

export default OpPopupLogo
