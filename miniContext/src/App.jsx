import { useState, useContext } from 'react'
import userContext from './context/UserContext'

import './App.css'

function App() {
  const [userName, setUserName] = useState("")
  const [password , setPassword] = useState("")


  const handleSubmit = () => {
    
  }

  return (
    <>
     <div>
      <h2>Aman aur react</h2>
      <input type="text" placeholder='enter value...' />
      <button onClick={handleSubmit}>Submit</button>
     </div>
    </>
  )
}

export default App
