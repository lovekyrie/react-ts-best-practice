import React from 'react'

interface ButtonProps {
  /** the button background color */
  color: string
  /** the button text */
  text: string
}

interface ContainerProps extends ButtonProps {
  /** the container height (value unit use 'px') */
  height: number
}

const Container: React.FC<ContainerProps> = ({ color, text, height }) => {
  return <div style={{ backgroundColor: color, height: `${height}px` }}>{text}</div>
}

export default Container
