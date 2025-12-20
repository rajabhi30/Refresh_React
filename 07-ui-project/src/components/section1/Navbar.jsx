import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-18 py-8'>
        <h4 className='bg-black text-white rounded-full px-6 py-2 uppercase text-sm'>Target Audience</h4>
        <button className='bg-gray-200 px-6 py-2 rounded-full tracking-wider text-xs uppercase'>Digital Banking platform</button>
    </div>
  )
}

export default Navbar