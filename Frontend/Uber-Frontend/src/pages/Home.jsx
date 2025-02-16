import React from 'react'
import { MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='bg-cover bg-center bg-[url(https://thumbs.dreamstime.com/b/street-lamps-light-dublin-city-centre-88575319.jpg)] h-screen w-full justify-between flex  flex-col '>
      <img className='w-24 invert pt-4 pl-4' src="https://logospng.org/download/uber/logo-uber-4096.png" alt="" />
      <div className='bg-white h-1/4 '>
        <h1 className='font-bold text-xl p-2 pt-2'>Get Start With Uber</h1>
       <div className='flex justify-center mt-7 items-center  '> <Link to='/login' className= 'bg-black  rounded-md text-white text-center p-3 w-[90%] '>Continue</Link> </div>
      </div>
    </div>
  )
}

export default Home
