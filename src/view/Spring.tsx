import React, { useState } from "react";
import { useTrail, animated, config } from "react-spring";

interface georef {
  x: number,
  y: number
}

const Spring = () => {
  const msg = "Hello React Spring";
  const [{ x, y }, setXY] = useState<georef>({ x: 0, y: 0 });
  const trails = useTrail(
    msg.length, 
    {
      config: config.gentle,
      left: `${x}px`,
      top: `${y}px`,
    }
  );
  return (
    <div
      style={{ width: "100%", height: 1000, fontSize: "24pt" }}
      onMouseMove={e => {
        e.persist();
        setXY({ x: e.clientX, y: e.clientY });
      }}
    >
      {trails.map((trail, idx) => (
        <animated.span 
          style={{
            ...trail,
            paddingLeft: idx * 23,
            position: 'absolute'
          }}>
          {msg[idx]}
        </animated.span>
      ))}
    </div>
  )
}

export default Spring
