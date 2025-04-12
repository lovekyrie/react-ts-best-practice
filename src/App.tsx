import Button from './demo/button'
import { Heading, OtherHeading } from './demo/compDiff'
import MyInput from './demo/formEvent'

function App() {
  function handleClick() {
    // eslint-disable-next-line no-alert
    alert('我被点击了')
  }
  return (
    <>
      <Heading name="李世奇" color="yellow" />
      <OtherHeading name="lovekyrie" color="blue" />
      <Button onClick={handleClick}>这是我建的一个按钮</Button>
      <MyInput />
    </>
  )
}

export default App
