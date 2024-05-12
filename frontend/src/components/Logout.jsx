import React from 'react'
import { useAuth } from '../context/AuthProvider'

const Logout = () => {
    const [Authuser,setAuthuser]= useAuth();
    const handlelogout= ()=>{
    setAuthuser({
        ...Authuser,
        user:null
    })
    localStorage.removeItem('user');
    console.log("logout succesfully");
    window.location.reload();
}
  return (
    <div>
     <button onClick={handlelogout}  className=' ml-2 py-2 px-3 text-white bg-red-600 rounded-md cursor-pointer'>Logout</button>
     </div>
  )
}

export default Logout
