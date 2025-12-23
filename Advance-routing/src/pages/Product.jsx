import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Product = () => {
  return (
    <div>
        <div className='flex items-center justify-center gap-5 mt-5'>
            <Link to='/product/men'>Men's</Link>
            <Link to='/product/women'>Women's</Link>
        </div>
        {/* <h1>ProductPage</h1> */}
        <Outlet/>

        </div>
  )
}

export default Product