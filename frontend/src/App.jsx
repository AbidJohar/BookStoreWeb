import React from 'react'
import  {Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Signup from './components/Signup'
import About from './components/About'
import Contact from './components/Contact'
import Course from './components/Course'
 

 const App = () => {
   return (
    <>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/course' element={<Course/>}/>
         <Route path='/registor' element={<Signup/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
      </Routes>
     </>
   )
 }
 
 export default App
 