import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function UserSignup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [userData, setUserData] = useState({ firstname: '', lastname: '', email: '', password: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'email') {
      setEmail(value)
      setUserData({ ...userData, email: value })
    } else if (name === 'password') {
      setPassword(value)
      setUserData({ ...userData, password: value })
    } else if (name === 'firstname') {
      setFirstname(value)
      setUserData({ ...userData, firstname: value })
    } else if (name === 'lastname') {
      setLastname(value)
      setUserData({ ...userData, lastname: value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(userData)
  }

  return (
    <div className='h-screen w-full justify-between flex flex-col'>
      <form onSubmit={handleSubmit} className=''>
        <img className='w-24 p-3' src="https://logospng.org/download/uber/logo-uber-4096.png" alt="" />
        <h3 className='text-xl font-bold p-3'>
          What's your Name
        </h3>
        <div className='flex justify-center'>
          <input value={firstname} name="firstname" onChange={handleChange} placeholder='First Name' required className='m-3 p-2 rounded-md text-xs w-1/2 h-10 bg-[#eeeeee]' type="text" />
          <input value={lastname} name="lastname" onChange={handleChange} placeholder='Last Name' required className='m-3 p-2 rounded-md text-xs w-1/2 h-10 bg-[#eeeeee]' type="text" />
        </div>

        <h3 className='text-xl font-bold p-3'>
          What's your Email
        </h3>
        <input value={email} name="email" onChange={handleChange} placeholder='example@gmail.com' required className='m-3 p-2 rounded-md text-xs w-10/12 h-10 bg-[#eeeeee]' type="email" />
        <h3 className='text-xl font-bold p-3'>
          What's your password
        </h3>
        <input value={password} name="password" onChange={handleChange} placeholder='.........' required className='m-3 p-2 rounded-md text-xs w-10/12 h-10 bg-[#eeeeee]' type="password" />
        <button type='submit' className='w-11/12 h-10 m-4 mt-5 bg-black text-white text-center items-center flex justify-center'>Sign Up</button>
        <p className='pl-4'> already have an account <Link to='/login' className='text-green-600'>Login</Link> </p>
      </form>
    </div>
  )
}

export default UserSignup
