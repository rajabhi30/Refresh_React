import React from 'react'
import { createContext } from 'react'

 export  const ThemeDataContext=createContext()

const ThemeContext = ({children}) => {
  return (
    <div>
      <ThemeDataContext value="sarthak">
          {children}
      </ThemeDataContext>
    </div>
  )
}

export default ThemeContext