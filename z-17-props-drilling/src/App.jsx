import React, { useState } from 'react'
import Nav from './component/Nav'

const App = () => {
  const[theme,setTheme]=useState("light")
  return (
    <div>
      <h1>The theme is {theme}</h1>
      <Nav theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App