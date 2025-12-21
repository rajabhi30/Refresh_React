import React from 'react'

const App = () => {

  // localStorage.setItem('age',18)
  // const name=localStorage.getItem('user')

  // localStorage.removeItem('age');


  const user={
    name:"Abhishek",
    age:20,
  }

  localStorage.setItem("info",JSON.stringify(user));

  const val=JSON.parse(localStorage.getItem('info'));

  console.log(val);

  return (
    <div></div>
  )
}

 export default App