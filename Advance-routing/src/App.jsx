import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import {Routes, Route} from 'react-router-dom'
import NotFound from './pages/NotFound'
import Men from './pages/men'
import Women from './pages/women'
import Courses from './pages/courses'
import CourseDetail from './pages/CourseDetail'
import Nav2 from './components/Nav2'

const App = () => {
  return (
    <div className='bg-black h-screen text-white'>
      <NavBar/>
      <Nav2/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='courses' element={<Courses/>}/>
        {/* dynamic routing */}
        <Route element={<CourseDetail/>} path='/courses/:CourseId'/>

        <Route path='/product' element={<Product/>}>
          <Route path='men' element={<Men/>}/>
          <Route path='women' element={<Women/>}/>
        </Route>
        {/* <Route path='/product/men' element={<Men/>}/>
        <Route path='/product/women' element={<Women/>}/> */}
       


        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App