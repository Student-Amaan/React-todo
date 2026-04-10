import { useState } from 'react'

import './App.css'
import InputBox from './Components/Inputbox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InputBox />
    </>
  )
}

export default App
