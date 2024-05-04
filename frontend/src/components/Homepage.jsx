import React from 'react'
import book from '../../public/books.jpg'

const Homepage = () => {
  return (
     <>
     <div className='max-w-screen-2xl h-screen container mx-auto md:px-16  flex flex-col md:flex-row'>
      <div className='w-full order-2 md:order-1'>
      <h1 className='font-bold text-xl pl-4 mt-40 mb-2'>Hello, Welcome to our Book store, where you can buy variety 
      of Books  <span className='text-orange-600'>in Low price...</span></h1>
      <p className='text-sm pl-4 text-pretty'>Welcome to our online bookstore, where every page holds a new adventure. Explore our vast collection of books spanning genres from timeless classics to contemporary bestsellers. Immerse yourself in captivating stories and enrich your mind with knowledge, all just a click away. Start your literary journey with us today!</p>
      <button className=' py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded-md font-semibold text-white ml-4 my-9'>Signup</button>
      </div>
      <div className='w-full  pt-24 order-1 '>
        <img  src={book} alt='' />
      </div>
     </div>
     </>
  )
}

export default Homepage
