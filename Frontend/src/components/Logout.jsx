import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

const Logout = () => {

    const [authUser,setAuthUser] = useAuth()
    
    const handleData = () =>{
        try {
            setAuthUser({...authUser,user:null})
            localStorage.removeItem('user');
            toast.success('user logout successfully');
            setTimeout(()=>{
                window.location.reload();
            },1000)
        } catch (error) {
            console.log("Error : " + error.message);
            // toast.error('')
        }
    }


  return (
    <button onClick={handleData} className='px-4 py-2 text-white bg-red-500 rounded-md'>Logout</button>
  )
}

export default Logout