import React, { useEffect, useState } from 'react';

const scrollTop = (): number => {
  // スクロール量ではなく、スクロール位置
  return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
}

const ScrollLav: React.FC = () => {
  const [isDownScroll, changeDirection] = useState<boolean | null>(null);
  const [prev_position, reinitPosition] = useState<number>(0)

  const onScroll = (): void => {
    const current_position = scrollTop();
    console.log(current_position)
    if (current_position > prev_position) {
      changeDirection(true);
    } else {
      changeDirection(false);
    }
    reinitPosition(current_position)
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return (): void => document.removeEventListener("scroll", onScroll);
  });

  const  scrollStyle: React.CSSProperties = isDownScroll
  ? { backgroundColor: "skyblue", opacity: 0.8 }
  : { backgroundColor: "#fff" }
  
  return (
    <div
      style={scrollStyle}
    >
      <h1>toggle background color by scrolling direction </h1>
      <h1>toggle background color by scrolling direction </h1>
      <h1>toggle background color by scrolling direction </h1>
      <h1>toggle background color by scrolling direction </h1>
      <h1>toggle background color by scrolling direction </h1>
      <h1>toggle background color by scrolling direction </h1>
      <h1>toggle background color by scrolling direction </h1>
      <h1>toggle background color by scrolling direction </h1>
      <h1>toggle background color by scrolling direction </h1>
      <h1>toggle background color by scrolling direction </h1>
      <h1>toggle background color by scrolling direction </h1>
      <h1>toggle background color by scrolling direction </h1>
      <h1>toggle background color by scrolling direction </h1>
      <h1>toggle background color by scrolling direction </h1>
      <h1>toggle background color by scrolling direction </h1>
      <h1>toggle background color by scrolling direction </h1>
      <h1>toggle background color by scrolling direction </h1>
      <h1>toggle background color by scrolling direction </h1>
      <h1>toggle background color by scrolling direction </h1>
    </div>
  )
}

export default ScrollLav
