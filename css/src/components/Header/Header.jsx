import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.header}>
        <h2>Abhishek</h2>
        <button className='btn'>Click me</button>
    </div>
  )
}

export default Header