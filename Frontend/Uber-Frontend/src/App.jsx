import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Captionlogin from './pages/Captionlogin'
import Captionsignup from './pages/Captionsignup'
function App() {
  return (
    <div className=' '>
      <Routes> 
        <Route  path='/' element={<Home/>}/>
        <Route  path='/login' element={<UserLogin/>}/>
        <Route  path='/signup' element={<UserSignup/>}/>
        <Route  path='/CaptionLogin' element={<Captionlogin/>}/>
        <Route  path='/CaptionSignup' element={<Captionsignup/>}/>
        
      </Routes>
     
    </div>
  )
}

export default App
