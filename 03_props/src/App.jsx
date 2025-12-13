import React from 'react'
import Card from './component/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="Aman"/>
      <Card user="Rohit"/>
      <Card user="Naina"/>
    </div>
  )
}

export default App