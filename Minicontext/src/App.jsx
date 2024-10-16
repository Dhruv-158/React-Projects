import UserContextProvider from './Context/UserContextProvider'

import './App.css'
import Login from './componants/Login'
import Profile from './componants/Profile'

function App() {


  return (
    <UserContextProvider>
      <h1>That&lsquo;s my React Project </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
