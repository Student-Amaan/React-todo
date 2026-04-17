
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  

 

  return (
    <UserContextProvider>
      <h1> welcome to react context</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App
