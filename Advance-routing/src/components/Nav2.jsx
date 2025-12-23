import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav2 = () => {
    let navigate=useNavigate();
  return (
    <div className='bg-teal-900 px-4 py-2 flex gap-5'>
        <button onClick={()=>{
            navigate('/')
        }}className='bg-yellow-500 text-black px-4 py-2 rounded'>Home</button>
        <button  onClick={()=>{
            navigate(-1)
        }}className='bg-yellow-500 text-black px-4 py-2 rounded'>Prev</button>
        <button onClick={()=>{
            navigate(+1)
        }}className='bg-yellow-500 text-black px-4 py-2 rounded' >Next</button>
    </div>
  )
}

export default Nav2