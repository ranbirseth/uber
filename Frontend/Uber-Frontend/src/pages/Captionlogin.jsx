import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Captionlogin() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [CaptionData, setCaptionData] = useState({ email: '', password: '' })

  const HandleChange = (e) => {
    const { name, value } = e.target
    if (name === 'email') {
      setemail(value)
      setCaptionData({ ...CaptionData, email: value })
    } else if (name === 'password') {
      setpassword(value)
      setCaptionData({ ...CaptionData, password: value })
    }
  }

  const HandleSubmit = (e) => {
    e.preventDefault()
    
    console.log(CaptionData)
  }


  return (
    <div className=' h-screen w-full justify-between flex  flex-col '>
    <form onSubmit={(e) => { HandleSubmit(e) }} className=''>
      <img className='w-24 p-3' src="https://logospng.org/download/uber/logo-uber-4096.png" alt="" />
      <h3 className='text-xl fonrts-bold p-3'>
        What's your email
      </h3>
      <input name="email" value={email} onChange={(e) => HandleChange(e)} placeholder='example@gmail.com' required className='m-3 p-2 rounded-md text-xs w-10/12 h-10 bg-[#eeeeee]' type="email" />
      <h3 className='text-xl fonrts-bold p-3'>
        What's your password
      </h3>
      <input name="password" value={password} onChange={(e) => HandleChange(e)} placeholder='example@gmail.com' required className='m-3 p-2 rounded-md text-xs w-10/12 h-10 bg-[#eeeeee]' type="password" />
      <button type='submit' className='w-11/12 h-10 m-4 mt-5 bg-black text-white text-center items-center flex justify-center'>Login</button>
      <p className='p-3'> New Here ? <Link to='/signup' className='text-green-600  '>Create a New Account</Link> </p>
    </form>
    <div>
      <Link to='/login' className='w-11/12 h-10 m-4 mt-5 bg-orange-500 text-white  text-center items-center flex justify-center'> Sing in as a User</Link>
    </div>
  </div>
  )
}

export default Captionlogin
