import { useState } from 'react'

const getScrollDirection = (event: Event, scrollElm: HTMLElement) => {
  
  const current_pos = scrollElm.scrollTop

  console.log(current_pos)
}

export default getScrollDirection
