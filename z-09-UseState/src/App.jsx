// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [num, setnum]= useState(10);

//   function change(){
//     setnum(30)
//   }
//   return (
//     <div>
//       the value of num is:- {num}
//       <br />
//       <button onClick={change}>click</button>
//     </div>
//   )
// }

// export default App



import React from 'react'
import { useState } from 'react'

const App = () => {
  const[num,setnum]=useState(0)
  

  function increase(){
    setnum(num+1);
  }

  function decrease(){
    setnum(num-1);
  }
  function reset(){
    setnum(0);
  }
  return (
    <div>
      <div className='val'>{num}</div>
      <button onClick={decrease}>Decrease</button>
      <button onClick={increase} style={{margin:20}}>Increase</button>
      <br />
      <button style={{marginLeft:54}} onClick={reset}>Reset</button>
    </div>
  )
}

export default App