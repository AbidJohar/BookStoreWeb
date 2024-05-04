import React from 'react'
import image from "../../public/abid.jpg"
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
   return (
      <>
      <Navbar/>
         <div className="max-w-screen-2xl  z-10 container mx-auto md:px-16 px-3 bg-gray-100">
            <div className="max-w-4xl mx-auto px-4 py-8 flex items-start flex-col md:flex-row">
               <div className="w-fit mt-14 ml-14">
                  <img
                     src={image}
                     alt="Your Image"
                     className="w-60 h-80  rounded-lg shadow-lg hover:opacity-75 transition-opacity duration-300"
                  />
               </div>
               <div className="w-full md:w-1/2 px-4 md:px-8 mt-14 flex flex-col">
                  <h2 className="text-2xl font-bold mb-1">About Me</h2>
                  <p className="text-gray-700 leading-relaxed text-sm tracking-tight">
                     Hello there! 👋 I'm <strong>ABID HUSSAIN</strong>, a passionate MERN stack developer with a love for crafting robust and scalable web applications. With a background in computer science and a keen eye for detail, I thrive on turning innovative ideas into reality through code.
                  </p>
                  <h2 className="text-xl font-bold mt-4 md:pl-28 ">My Expertise</h2>
                  <p className="text-gray-700 leading-relaxed text-sm text-justify mt-1 md:text-center">
                     I specialize in building full-stack applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack. Whether it's creating responsive front-end interfaces with React, designing efficient back-end APIs with Node.js and Express, or managing data with MongoDB, I'm equipped with the skills to bring your project to life.
                  </p>
               </div>

            </div>
         </div>
         <Footer/>
      </>
   )
}

export default About
