import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'
const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) =>{
    const UserInfo = {
      email:data.email,
      password:data.password
    }
try {
  const res = await axios.post('http://localhost:8080/auth/login',UserInfo);
    console.log('login Data =>',res.data);

    if(res.data)
    {
      toast.success('User Login successfully!');
    }
    localStorage.setItem('user',JSON.stringify(res.data.data));
} catch (error) {
  if(error.response)
    {
      console.log(error);
      toast.error("Error: " + error.response.data.message);
    }
}
    
  } 

  return (
    <>
    <dialog id="my_modal_3" className="modal flex items-center justify-center max-md:pr-7 ">
  <div className="modal-box dark:bg-slate-900">
    <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-white" onClick={()=>document.getElementById('my_modal_3').close()} >✕</Link>
    
    <h3 className="font-bold text-lg">Login</h3>
    <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2 items-left mt-4'>
        <span className=''>Email:</span>
        <input type='email' placeholder='Enter Your Email' className='dark:text-black px-4 py-2 border focus:outline-none rounded-lg focus:bg-sky-100'  {...register("email", { required: true })}/>
        {errors.email && <span className='text-red-500'>This field is required</span>}
        </div>

        <div className='flex flex-col gap-2 items-left'>
        <span>Password:</span>
        <input type='password' placeholder='Enter Your Password' className='dark:text-black px-4 py-2 border focus:outline-none rounded-lg focus:bg-sky-100' {...register("password", { required: true })}/>
        {errors.password && <span className='text-red-500'>This field is required</span>}
        </div>

        <div className='flex flex-row items-center justify-between'>
            <button type='submit' className='px-4 py-2 bg-pink-500 rounded-lg text-white'>Login</button>
            <span>Not registered? <Link to='/signup'  className='underline text-sky-300'>Signup</Link></span>
        </div>
    </div>
    </form>
  </div>
</dialog>
    </>
  )
}

export default Login