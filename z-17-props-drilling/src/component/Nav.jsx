import React from 'react'

const Nav = (props) => {
  return (
    <div className='btn'>
        <button onClick={()=>{
            props.setTheme("Dark")
        }}>Change theme</button>
    </div>
  )
}

export default Nav