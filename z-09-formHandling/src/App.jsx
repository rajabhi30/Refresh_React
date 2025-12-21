import React from 'react'

const App = () => {
  const submithandler=(ev)=>{
    ev.preventDefault();
  }
  return (
    <div>
      <form onSubmit={(ev)=>{
        submithandler(ev)
      }}>
        <input type="text" placeholder='enter your name here' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App