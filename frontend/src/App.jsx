import React from 'react'
import  {Routes, Route,Navigate } from 'react-router-dom'
import Home from './Home/Home'
import Signup from './components/Signup'
import About from './components/About'
import Contact from './components/Contact'
import Course from './components/Course'
import { useAuth } from './context/AuthProvider'
 
 

 const App = () => {
  const [Authuser,setAuthuser]= useAuth();
   return (
    <>
      <Routes>
         <Route path='/course'  element={Authuser ? <Course/> : <Navigate to="/signup"/>}/>
         <Route path='/' element={<Home/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
      </Routes>
     </>
   )
 }
 
 export default App
 