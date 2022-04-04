import { useState, useMemo, useEffect, useRef } from 'react'
import './fadein.css'

//images
import css from '../../assets/CSS.png'
import vue from '../../assets/Vue.js.png'
import react from '../../assets/React.js.png'
import typescript from '../../assets/TypeScript.png'

type State = {
  transform: string
  opacity: number
}

const scrollTop = () => {
  return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
}

const useScrollFadeIn = (
  isDownScroll: boolean,
  scrollElmId: string,
  ref: React.RefObject<HTMLDivElement>,
  translate: {x: number, y: number},
  adjust?: number
) => {
  const [cssState, updateStyle] = useState<State>({
    transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
    opacity: 0
  })

  const fadeAnimationStyle = useMemo(
    () => ({
      width: '100%',
      transition: 'all 1s ease 0.2s',
      opacity: cssState.opacity,
      transform: cssState.transform,
    }),
    [cssState.opacity, cssState.transform]
  )

  useEffect(() => {
    const scrollElm = document.getElementById(scrollElmId)
    if (!ref.current || !scrollElm) return

    const scroll = scrollElm.scrollTop
    const offsetTop = ref.current!.offsetTop
    const windowHeight = scrollElm.clientHeight

    const handleScroll = () => {
      //handle down scroll
      if (
        isDownScroll && 
        offsetTop < scroll + windowHeight - (adjust ? adjust : 0)
      ) {
        // offsetまでスクロールしたとき
        updateStyle(_state => ({
          ..._state,
          opacity: 1,
          transform: `translateX(0) translateY(0)`,
        }))
      } else {
        //offsetよりも上までしかスクロールしていないとき
        updateStyle(_state => ({
          ..._state,
          opacity: 0,
          transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
        }))
      }
    }

    document.addEventListener('scroll', handleScroll)
    
    return () => document.removeEventListener('scroll', handleScroll)
  })

  return fadeAnimationStyle
}

const FadeIn: React.VFC = () => {
  const ref = useRef<HTMLDivElement>(null)

  const [isDownScroll, changeDirection] = useState<boolean>(true)
  const [prev_position, reinitPosition] = useState<number>(0)

  const fadeAnimationStyle = useScrollFadeIn(
    isDownScroll,
    'main_scroll',
    ref,
    { x: 600,y: 0 }
  )

  const onScroll = () => {
    const current_position = scrollTop();
    if (current_position > prev_position) {
      changeDirection(true)
    } else {
      changeDirection(false)
    }
    reinitPosition(current_position)
  }

  useEffect(() => {
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  })
  
  return (
    <div id='main_scroll'>
      <h1>fadein</h1>
      <div className='content_1' >
        <p className='text fadeIn'>content_1</p>
        <img src={css} alt=''  />
      </div>
      <div className='content_2'>
        <p className='text'>content_2</p>
        <img src={vue} alt='' />
      </div>
      <div className='content_3'
        ref={ref}
        style={fadeAnimationStyle}
      >
        <p className='text fadeIn'>content_3</p>
        <img src={react} className='fadeIn' alt='' />
      </div>
      <div className='content_4'>
        <p className='text fadeIn'>content_4</p>
        <img src={typescript} className='fadeIn' alt='' />
      </div>
    </div>
  )
}

export default FadeIn
