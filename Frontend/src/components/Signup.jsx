import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'
import Navbar from './Navbar'


const Signup = () => {
  
  const navigate = useNavigate();

   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
  
    
    const onSubmit = async (data) => {
      const UserInfo = {
        fullname:data.fullname,
        email:data.email,
        password:data.password
      }
      try {
        const res = await axios.post('http://localhost:8080/auth/signup',UserInfo);
        console.log('resData =>',res.data);
        if(res.data)
          {
            toast.success('User register successfully!');
          }
          localStorage.setItem('user',JSON.stringify(res.data.user)); 
          setTimeout(()=>{
            navigate('/')
          },1500)
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
    <Navbar/>
    <div className='flex h-screen items-center justify-center'>
<div id="my_modal_3" className="border dark:border-slate-800  rounded-md md:w-1/4 ">
  <div className="model-box dark:bg-slate-900 p-10 relative">
    <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2  dark:text-white">✕</Link>
    
    <h3 className="font-bold text-lg">Sign Up</h3>
    <div className='flex flex-wrap flex-col gap-4 '>

    <div className='flex flex-col gap-2 items-left mt-4'>
        <span className=''>Name:</span>
        <input type='text' {...register("fullname", { required: true })} placeholder='Enter Your Fullname' className='dark:text-black px-4 py-2 border focus:outline-none rounded-lg focus:bg-sky-100'/>
        {errors.fullname && <span className='text-red-500'>This field is required</span>}
        </div>

        <div className='flex flex-col gap-2 items-left'>
        <span className=''>Email:</span>
        <input type='email' {...register("email", { required: true })} placeholder='Enter Your Email' className='dark:text-black px-4 py-2 border focus:outline-none rounded-lg focus:bg-sky-100'/>
        {errors.email && <span className='text-red-500'>This field is required</span>}
        </div>

        <div className='flex flex-col gap-2 items-left'>
        <span>Password:</span>
        <input type='password' {...register("password", { required: true })} placeholder='Enter Your Password' className='dark:text-black px-4 py-2 border focus:outline-none rounded-lg focus:bg-sky-100'/>
        {errors.password && <span className='text-red-500'>This field is required</span>}
        </div>

        <div className='flex flex-wrap flex-col md:flex-row items-center justify-center'>
            <button type='submit' className='px-4 py-2 bg-pink-500 rounded-lg text-white'>Signup</button>
        </div>
    </div>
    </form>
  </div>
</div>
    </div>
    </>
  )
}

export default Signup