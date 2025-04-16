import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from '../../public/Data/List.json';
import Card from './Card';
import axios from 'axios';

const FreeBook = () => {

  const [book,setBook] = useState([]);

    // 

    useEffect(()=>{
        const getData = async () =>{
          try {
            const res = await axios.get('http://localhost:8080/api/book');
            const filterData = res.data.filter((e)=>e.category === 'Free');
            setBook(filterData);
            console.log('resData =>',filterData);
          } catch (error) {
            console,log('Error',error);
          }
        }
        getData();
    },[])

      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-8 md:mt-0'>
      <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
      <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, voluptates perferendis velit atque iste possimus nostrum error culpa accusamus dolore. Ex saepe obcaecati minus incidunt quidem iusto aliquam aperiam sapiente.</p>
    </div>

    <div className="slider-container max-w-screen-2xl container mx-auto">
      <Slider {...settings}>
       {book.map((item)=>(
        <Card items={item} key={item.id}/>
       ))}
      </Slider>
    </div>
    </>
  )
}

export default FreeBook