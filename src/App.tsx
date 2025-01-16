import './App.css'
import { Button } from './components/Button/Button'

function App() {
  return (
    <>
      <Button appearance='arrow' link='/'  label='Test' />
      <br/>
      <Button appearance='solid' link='/'  label='Test' />
      <br/>
      <Button appearance='big' link='/'  label='Test' />
      <br/>
      <Button appearance='arrow' label='Test' /> 
      <br/>     
      <Button appearance='solid' label='Test' />
      <br/>
      <Button appearance='big' label='Test' />
    </>
  )
}

export default App
