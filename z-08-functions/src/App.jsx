import React from 'react'

const App = () => {

  function abc(){
    console.log("btn clicked!!")
  }

  function gettext(val){
    console.log(val)
  }
  return (
    <div>
      <button onClick={abc} className='btn'>click me</button>
      <br />
      <input onChange={function(elem){
        gettext(elem.target.value)
      }} type="text" name="" id="input" />
    </div>
  )
}

export default App