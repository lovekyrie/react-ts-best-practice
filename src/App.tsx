import Button from './demo/button'
import { Heading, OtherHeading } from './demo/compDiff'
import MyInput from './demo/formEvent'
import Container from './demo/spreadProps'

function App() {
  function handleClick() {
    // eslint-disable-next-line no-alert
    alert('我被点击了')
  }
  return (
    <>
      <Heading name="landon" color="yellow" />
      <OtherHeading name="lovekyrie" color="blue" />
      <Button onClick={handleClick}>这是我建的一个按钮</Button>
      <div style={{ margin: '10px 0' }}>
        <MyInput />
      </div>
      <Container text="天空会的像哭过的按钮" color="green" height={40} />
    </>
  )
}

export default App
