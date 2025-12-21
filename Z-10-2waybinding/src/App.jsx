import React from 'react'
import { useState } from 'react';

const App = () => {

  const[name,setname]=useState(' ')
   
  const submithandler=(e)=>{
    e.preventDefault();
    console.log("form is submitted by",name)
    setname(' ')
  }
  return (
    <div>
      <form onSubmit={(ev)=>{
        submithandler(ev)
      }}>
        <input onChange={(e)=>{
          setname(e.target.value)
        }} 
        type="text" placeholder='enter your name here ' value={name}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App