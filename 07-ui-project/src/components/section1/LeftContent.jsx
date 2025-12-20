import React from 'react'
import 'remixicon/fonts/remixicon.css'
const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between'>
        <div className='p-4'>
            <h3 className='text-5xl font-bold mb-5 leading-[1.1]'>
                Prospective <br /> <span className='text-gray-600'>customer</span>
                <br />
                segmentation
            </h3>
            <p className='text-sm font-medium text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita molestias ipsum consectetur eius corporis, laborum sint vitae ullam numquam eaque?</p>
        </div>
        <div className='text-6xl'>
            <i class="ri-arrow-right-up-line"></i>
        </div>
    </div>
  )
}

export default LeftContent