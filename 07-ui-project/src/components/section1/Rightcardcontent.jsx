import React from 'react'

const Rightcardcontent = (props) => {
  return (
    <div>
        <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-8 w-8 flex justify-center items-center text-xxl font-bold'>{props.id+1} </h2> 
            <div>
                <p className='text-sm leading-normal text-white mb-6.5 tracking-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, suscipit quas non dolorum voluptatum ipsam.</p>
            <div className='flex justify-between'>
                <button style={{backgroundColor:props.color}} className='px-8 py-2 text-white  rounded-full font-semibold'>{props.tag}</button>
                <button style={{backgroundColor:props.color}} className='px-4 py-2 text-white  rounded-full font-semibold'><i class="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Rightcardcontent