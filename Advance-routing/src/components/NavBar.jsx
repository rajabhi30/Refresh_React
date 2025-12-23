import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex justify-between bg-teal-700 px-4 py-4 items-center'>
      <h2 className='text-xl font-bold text-white'>Abhishek</h2>
      <div className='flex gap-9'>
        <Link className='text-lg font-bold text-white' to='/'>Home</Link>
        <Link className='text-lg font-bold text-white' to='/about'>About</Link>
        <Link className='text-lg font-bold text-white' to='/product'>Product</Link>
        <Link className='text-lg font-bold text-white' to='/courses'>Courses</Link>
        
      </div>
    </div>
  )
}

export default NavBar
