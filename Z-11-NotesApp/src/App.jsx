import React from 'react'
import { useState } from 'react'

const App = () => {

    const[title,setTitle]=useState('');
    const[detail,setDetail]=useState('')

    const[Task,setTask]=useState([]);
    const submithandler=(e)=>{

        e.preventDefault()

        const newTask=[...Task]

        newTask.push({title,detail});

        setTask(newTask);

        setTitle('')
        setDetail('')
    }

    const deleteNote=(idx)=>{
        const AllTask=[...Task]

        AllTask.splice(idx,1)
        setTask(AllTask);

    }

  return (

    <div className='bg-black h-screen  overflow-auto text-white'>
        <form onSubmit={(e)=>{
            submithandler(e)
        }}className='flex  justify-between  items-start p-5'>
            <div className='flex gap-4 w-1/2 items-start flex-col' >
            {/* heading */}
            <input className='px-5 w-full py-2 border-2 rounded outline-none font-medium text-white' type="text" placeholder='Enter notes heading' value={title} onChange={(e)=>{
                setTitle(e.target.value)
            }}/>


            <input className= 'px-5 py-2 w-full h-20  border-2 rounded outline-none font-medium'  type="text" placeholder='Write Details' value={detail} onChange={(e)=>{
                setDetail(e.target.value)
            }}/>


            <button className='bg-white w-full text-black px-5 py-2.5 rounded active:scale-95'>Add note</button>


            </div>
            <div>
                <img className='rotate-y-180  ' src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png" alt="" />
            </div>
        </form>
       <div className=''>
        <h1 className='text-2xl ml-10'>Recent Notes:-  </h1>
         <div className='flex gap-5 flex-wrap p-10'>
            {Task.map((elem,idx)=>{
                return <div key={idx} className='relative h-50  w-45 rounded-2xl text-black bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")] bg-cover'>
                    <h2  onClick={()=>{
                        deleteNote(idx)
                    }} className='absolute top-41 right-2 text-xs bg-gray-500 text-white p-2 rounded-full active:scale-95'>X</h2>
                    <h3 className='m-3 text-2xl font-bold'>{elem.title}</h3>
                    <p className=' p-2 text-xl text-gray-600'>{elem.detail}</p>
                </div>
            })}
        </div>
       </div>
    </div>

  )
}

export default App