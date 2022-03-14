import { useCallback } from 'react'
import { useSpring, animated, easings } from 'react-spring'

const slideStyle = {
  height: '100vh',
  width: '100vw',
  top: '0',
  backgroundColor: 'rgb(255, 175, 188)',
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

  return (
    <div>
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
