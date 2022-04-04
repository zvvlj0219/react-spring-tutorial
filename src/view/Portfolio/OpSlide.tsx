import { useCallback } from 'react'
import { useSpring, animated, easings } from 'react-spring'

// const containerStyle = {
//   transformStyle: 'preserve-3d',
//   perspective: '500px'
// }

const slideStyle = {
  height: '100vh',
  width: '100vw',
  top: '0',
  backgroundColor: 'rgb(255, 175, 188)',
}

const textStyle = {
  fontSize:'4rem',
  top: '140px',
  left: '35%'
}

const OpSlide = () => {
  const slideAnimate = useSpring({
    to: useCallback(async next => {
      await next({
        clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0)',
        transform: 'translateX(0)'
      })
    }, []),
    from: {
      clipPath: 'polygon(0 0, 0 100%, 90% 100%, 75% 0)',
      transform: 'translateX(-80%)'
    },
    config: {
      duration: 1300,
      easing: easings.easeInOutQuart
    }
  })

  const popupLogoStyle = useSpring({
    to: useCallback(async next => {
      await next({
        transform: 'scale(1.2)',
        opacity: '1'
      })
    }, []),
    from: {
      transform: 'scale(1)',
      opacity: '0'
    },
    config: {
      duration: 1000,
      easing: easings.easeInOutQuart
    }
  })

  return (
    <div
      style={{
        transformStyle: 'preserve-3d',
        perspective: '500px'      
      }}
    >
      <animated.h1
        style={{
          ...popupLogoStyle,
          ...textStyle,
          textAlign: 'center',
          zIndex: '2',
          position: 'absolute'
        }}
      >
        Free-Animate®
      </animated.h1>
      <animated.div
        id='tinder_fake'
        style={{
          ...slideStyle,
          ...slideAnimate,
          position: 'absolute'
        }}
      />
    </div>
  )
}

export default OpSlide
