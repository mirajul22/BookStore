import React, { useEffect, useState } from 'react'
import Card from './Card';
import { Link } from 'react-router-dom';
import axios from 'axios';


const CouresHero = () => {

   const [book,setBook] = useState([]);

   useEffect(()=>{
      const getData = async () =>{
 
        try {
        const res = await axios.get('http://localhost:8080/api/book');
        console.log('getData',res.data);
        setBook(res.data);
        } catch (error) {
          console.log("Api is not giving data =>",error);  
        }
      }
      
      getData()
   },[])

  return (
    <>
    <div className='max-w-screen-4xl container mx-auto md:px-20 px-4'>
    <div className='mt-28 text-center'>
        <h1 className=' text-2xl  md:text-4xl'>We're delighted to have you <span className='text-pink-500 font-semibold'>Here! :)</span></h1>
        <p className='mt-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum voluptates consequuntur dicta vero, ab officia cumque pariatur doloribus. Totam consectetur cupiditate reiciendis animi. Nam provident ea incidunt libero magni, sed autem saepe quod eum suscipit deserunt, amet asperiores officia tempore obcaecati sint, ipsam minus reiciendis? Similique laudantium minus porro distinctio?</p>
        <Link to={'/'}>
        <button type='button' className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300' >Back</button>
        </Link>
    </div>

    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
       {book.map((item)=>(
         <Card items={item} key={item.id}/>
       ))}
    </div>
    </div>
    </>
  )
}

export default CouresHero