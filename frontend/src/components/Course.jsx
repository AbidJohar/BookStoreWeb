import React from 'react'
import Cards from './Cards';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import { useState,useEffect } from 'react';

const Course = () => {
  const [Book, setBook] = useState([]);
  useEffect(()=>{
  
    const getBook = async ()=>{
     try {
      const res =  await axios.get('http://localhost:4001/book');
       console.log(res.data);
       setBook(res.data);
     } catch (error) {
      console.log("Error: ", error);
     }
    }
   getBook();
  },[]);
  return (
    <>
    <Navbar/>
    <div className='max-w-screen-2xl z-10 container mx-auto md:px-16 px-3'>
       <div className='mt-24  text-center'>
        <h1 className='text-2xl font-semibold'>We are delighted to have you <span className='text-orange-500'>Here...</span></h1>
        <p className=' mt-2 text-start inline-block'>Welcome to course page, here you can buy different books and definitly can gain knowledge an improve yourself by studing our books.. </p>
        <a href='/' className= ' mb-4 bg-orange-500 hover:bg-orange-600 hover:text-white py-1 px-4 rounded-sm '>Back</a>
       </div>
       <div className='mt-2 grid grid-cols-1 md:grid-cols-3'>
        {
           Book.map((item)=>(
            <Cards item = {item} key={item.id}/>
           ))
        }
       </div>

    </div>
    <Footer/>
    </>
  )
}

export default Course
