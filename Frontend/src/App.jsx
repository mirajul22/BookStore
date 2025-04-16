import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from 'react-router-dom'
import Course from './Course/Course'
import Signup from './components/Signup'
import Contact from './contact/Contact'
import  { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Course/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Toaster />
   </>  
  )
}

export default App