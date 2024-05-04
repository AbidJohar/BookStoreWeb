import React from 'react'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'


const Signup = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data);
  return (
     <>
     <div className='flex items-center justify-center mt-24'>
       <div className="modal-box shadow-2xl">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
    <Link to='/'className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
            onClick={()=> document.getElementById('my_modal_3').close()}>
            ✕
            </Link>
       
    
    <h3 className="font-bold text-lg">Login</h3>
    <h4 className='mt-6 text-lg '>Name</h4>
     <input className='outline-none border border-gray-300 text-sm rounded-md px-2 py-1 md:border-collapse' type="text" placeholder='Enter your name' {...register("name", { required: true })}/> <br />
     {errors.name && <span className='text-sm text-red-600'>Name is required</span>}
     <h4 className='mt-2 text-lg '>Email</h4>
     <input className='outline-none border border-gray-300 text-sm rounded-md px-2 py-1 md:border-collapse' type="email" placeholder='Enter your email' {...register("email", { required: true })}/> <br />
     {errors.email && <span className='text-sm text-red-600'>Email is required</span>}
     <h4 className='mt-2 text-lg '>Password</h4>
     <input className='outline-none border border-gray-300 text-sm rounded-md px-2 py-1' type="text" placeholder='Enter your Password' {...register("password", { required: true })}/> <br />
     {errors.password && <span className='text-sm text-red-600'>Password is required</span>}
     <div className='flex flex-row items-end  justify-between mt-6'>
      <button className=' inline-block px-3 py-1 bg-orange-500 rounded-md hover:bg-orange-600 hover:text-white' type='submit'>Login</button>
      <p className='text-sm ml-3'>Have account? <a className='text-blue-800 underline underline-offset-3' href="/">Login</a></p>
      </div>
      </form>
  </div>
  </div>
     </>
  )
}

export default Signup
