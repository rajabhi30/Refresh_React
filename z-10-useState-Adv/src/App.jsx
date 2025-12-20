import React, { useState } from 'react'

const App = () => {
  // const[num,setnum]=useState({name:"Abhishek",age:18})

  // const [num,setnum]=useState([10,20,30]) 

  const[user,setuser]=useState({name:"abhi", age:18})


  // function  click(){
    // setnum(num+10)
    //  console.log(num)

    // const newnum={...num};
    // newnum.name="motu-patlu"
    // setnum(newnum);
  // }


  function click(){
    // const newarray=[...num];
    // newarray.push(100);
    // setnum(newarray)
    // setnum(prev=>([,,,prev,1000]))

    setuser(prev=>({...prev, age:100}))
  }
  return (
    <div>
      {/* <h1>{num.name}, {num.age}</h1> */}
      <h1>{user.name} {user.age}</h1>
      <button onClick={click}>click here</button>
    </div>
  )
}

export default App