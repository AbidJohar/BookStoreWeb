import React from 'react'
import {useForm} from 'react-hook-form'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit =async (data)=>{
    const userDetail = {
      email: data.email,
      password: data.password
   }
   await axios.post("http://localhost:4001/user/login", userDetail)
      .then((res) => {
        console.log(res.data);
         if (res.data) {
          console.log(res.data);
          document.getElementById('my_modal_3').close();
          window.location.reload();
         }
         localStorage.setItem("user", JSON.stringify(res.data));   //parse data using JOSN.stringify()
      }).catch(() => {
         alert("Invalid user");
      })
  }

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
            {errors.email && <span className='text-sm text-red-600'>Email is required</span>}
         
            <h4 className='mt-2 text-lg '>Password</h4>
            <input className='outline-none border border-gray-300 text-sm rounded-md px-2 py-1' type="text" placeholder='Enter you Password'  {...register("password", { required: true })} /> <br />
            {errors.password && <span className='text-sm text-red-600'>Password is required</span>}
            <div className='flex flex-row items-end  justify-between'>
              <button className=' inline-block px-3 py-1 bg-orange-500 rounded-md mt-4 hover:bg-orange-600 hover:text-white' type='submit' >Login</button>
              <p className='text-sm ml-3'>Not registered? <a className='text-blue-800 underline underline-offset-3' href="/signup">Signup</a></p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  )
}

export default Login
