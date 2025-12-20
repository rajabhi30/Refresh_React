import React from 'react'
import Section1 from './components/section1/Section1'


const App = () => {

  const users = [
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       intro:'',
       tag:'Satisfied',
       color:'orange'
      },
      {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       intro:'',
       tag:'Underserved',
       color:'teal'
      },
      {
      img:'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       intro:'',
       tag:'Underbanked',
       color:'pink'
      },
      {
      img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       intro:'',
       tag:'Excellent',
       color:'seagreen'
      },
      {
      img:'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       intro:'',
       tag:'Average',
       color:'brown'
      }
  ]
  return (
    <div>
        <Section1 users={users}/>
    </div>  
  )
}

export default App