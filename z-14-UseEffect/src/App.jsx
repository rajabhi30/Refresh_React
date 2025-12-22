import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  const[num1,setnum1]=useState(0);
  const[num2,setnum2]=useState(0);

  useEffect(function(){
    console.log("useEffect chal rha hai")
  },[num2])

  function change1(){
    setnum1(num1+1);
  }

  function change2(){
    setnum2(num2+1);
  }
  return (
    <div>
      <h2>{num1}</h2>
      <button onClick={change1}>num1</button>
      <h2> {num2}</h2>
      <button onClick={change2}>num2</button>
    </div>
  )
}

export default App