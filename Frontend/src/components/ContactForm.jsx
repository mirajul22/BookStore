import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

const ContactForm = () => {

    const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm()
      
        const onSubmit = (data) => console.log(data)

  return (
    <>
      <div className='flex items-center justify-center mx-auto mt-[20%] md:my-[6%]'>
<div id="my_modal_3" className="rounded-md  md:w-1/3">
  <div className="model-box dark:bg-slate-900  p-10 relative">
    <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      {/* <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2  dark:text-white">✕</Link> */}
    
    <h2 className="font-bold  text-3xl">Contact Us</h2>
    <div className='flex flex-wrap flex-col gap-8 '>

    <div className='flex flex-col gap-2 items-left mt-8'>
        <span className=''>Name:</span>
        <input type='text' {...register("name", { required: true })} placeholder='Enter Your Fullname' className='dark:text-black px-4 py-2 border focus:outline-none rounded-lg focus:bg-sky-100'/>
        {errors.name && <span className='text-red-500'>This field is required</span>}
        </div>

        <div className='flex flex-col gap-2 items-left'>
        <span className=''>Email:</span>
        <input type='email' {...register("email", { required: true })} placeholder='Enter Your Email' className='dark:text-black px-4 py-2 border focus:outline-none rounded-lg focus:bg-sky-100'/>
        {errors.email && <span className='text-red-500'>This field is required</span>}
        </div>

        <div className='flex flex-col gap-2 items-left'>
        <span>Message:</span>
        <textarea type='text' rows="4"  {...register("password", { required: true })} placeholder='Enter Your Password' className='dark:text-black px-4 py-2 border focus:outline-none rounded-lg focus:bg-sky-100'/>
        {errors.password && <span className='text-red-500'>This field is required</span>}
        </div>

        <div className='flex flex-wrap flex-col md:flex-row items-center justify-start'>
            <button type='submit' className='px-4 py-2 bg-blue-500 rounded-lg text-white'>Submit</button>
        </div>
    </div>
    </form>
  </div>
</div> 
    </div>
    </>
  )
}

export default ContactForm