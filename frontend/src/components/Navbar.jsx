import React, { useEffect, useState } from 'react'
import Login from './Login';
import { useAuth } from '../context/AuthProvider';
import Logout from './Logout';

const Navbar = () => {
  const [Authuser,setAuthuser]= useAuth();
  const [sticky, setsticky] =useState(false);
  useEffect(()=>{
    const handlescroll = ()=>{
    if(window.scrollY>0){
      setsticky(true);
    }
    else{
      setsticky(false);
    }
  } 
  window.addEventListener("scroll", handlescroll);
  return ()=>{
  window.removeEventListener("scroll", handlescroll);
}
  },[]);

  return (
    <>
      <div className={`max-w-screen-2xl z-10 container mx-auto md:px-16 px-3 fixed top-0 left-0 right-0 ${sticky? " sticky-navbar shadow-lg bg-base-200" : "  "
                      }`} >
        <div className="navbar  ">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a href='/'>Home</a>
                </li>
                <li>
                  <a href='/course'>course</a>
                </li>
                <li>
                  <a href='/contact'>contact</a>
                </li>
                <li>
                  <a href='/about'>About</a>
                </li>

              </ul>
            </div>
            <a className="btn btn-ghost text-xl">BookStore</a>
          </div>
          <div className="navbar-end">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
              <li>
                  <a href='/'>Home</a>
                </li>
                <li>
                  <a href='/course'>course</a>
                </li>
                <li>
                  <a href='/contact'>contact</a>
                </li>
                <li>
                  <a href='/about'>About</a>
                </li>

              </ul>
            </div>

            <div className='hidden md:block'>
              <label className="flex border border-gray-700 rounded-md  px-3 py-2 items-center gap-2">
                <input type="text" className="grow outline-none" placeholder="Search" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
              </label>
            </div>
               { Authuser? <Logout/> : <div className="">
              <a className=" bg-black text-white px-4 py-2 rounded-md ml-2 hover:bg-slate-700 cursor-pointer " onClick={()=>document.getElementById('my_modal_3').showModal()}>Login</a>
              <Login/>
            </div>}
              
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
