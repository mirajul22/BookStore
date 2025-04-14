import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CouresHero from '../components/CouresHero'

const Course = () => {
  return (
    <>
    <Navbar/>
    <div className='minh-screen'>
    <CouresHero/>
    </div>
    <Footer/>
    </>
  )
}

export default Course