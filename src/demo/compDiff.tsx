import React from 'react'

interface Props {
  name: string
  color: string
}

// 用type也一样 但是能用interface就用interface 否则type
interface OtherProps {
  name: string
  color: string
}

// 函数声明式写法
function Heading({ name, color }: Props): React.ReactNode {
  return <h1 style={{ color }}>My {name} Website Heading, it's Color is {color}</h1>
}

// 函数扩展式写法
const OtherHeading: React.FC<OtherProps> = ({ name, color }) => <h1 style={{ color }}>My {name} Website Heading {color}</h1>

export { Heading, OtherHeading }
