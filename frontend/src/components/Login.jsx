import React from 'react'
import {useForm} from 'react-hook-form'
import {Link} from 'react-router-dom'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to='/'className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
            onClick={()=> document.getElementById('my_modal_3').close()}>
            ✕
            </Link>
          

            <h3 className="font-bold text-lg">Login</h3>

            <h4 className='mt-4 text-lg '>Email</h4>
            <input className='outline-none border border-gray-300 text-sm rounded-md px-2 py-1 md:border-collapse' type="email" placeholder='Enter you email'  {...register("email", { required: true })} /> <br />
            {errors.email && <span className='text-sm text-red-600'>This field is required</span>}
         
            <h4 className='mt-2 text-lg '>Password</h4>
            <input className='outline-none border border-gray-300 text-sm rounded-md px-2 py-1' type="text" placeholder='Enter you Password'  {...register("password", { required: true })} /> <br />
            {errors.password && <span className='text-sm text-red-600'>This field is required</span>}
            <div className='flex flex-row items-end  justify-between'>
              <button className=' inline-block px-3 py-1 bg-orange-500 rounded-md mt-4 hover:bg-orange-600 hover:text-white' >Login</button>
              <p className='text-sm ml-3'>Not registered? <a className='text-blue-800 underline underline-offset-3' href="/registor">Signup</a></p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  )
}

export default Login
