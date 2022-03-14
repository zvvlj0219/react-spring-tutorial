import { useState } from 'react'
import { useTrail, animated, config } from 'react-spring'

interface georef {
  x: number,
  y: number
}

const OpTrail: React.VFC = () => {
  const title = 'Free-Animate'

  const [{ x, y }, setXY] = useState<georef>({ x: 0, y: 0 })

  const trails = useTrail(title.length, {
    config: config.gentle,
    left: `${x}px`,
    top: `${y}px`
  })

  return (
    <div
      style={{ width: "100%", height: 1000, fontSize: "35px" }}
      onMouseMove={e => {
        e.persist();
        setXY({ x: e.clientX, y: e.clientY });
      }}
    >
      {
        trails.map((trail, idx) => (
          <animated.h2 
            key={`trail_${idx}`}
            className='animated_h2'
            style={{
              ...trail,
              paddingLeft: idx * 45,
              position: 'absolute'
            }}
          >
            {title[idx]}
          </animated.h2>
        ))
      }
      <div>
        <button
          style={{
            background: 'white',
            color: 'black',
            borderRadius: '5px',
            padding: '20px 50px',
            display: 'block',
            margin: '0 auto',
            position: 'absolute',
            top: '60%',
            left: '45%'
          }}
        >Get Start</button>
      </div>
    </div>
  )
}

export default OpTrail
