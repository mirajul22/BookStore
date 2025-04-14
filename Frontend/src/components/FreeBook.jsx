import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from '../../public/Data/List.json';
import Card from './Card';

const FreeBook = () => {

    const filterData = list.filter((e)=>e.category === 'Free');


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
       {filterData.map((item)=>(
        <Card items={item} key={item.id}/>
       ))}
      </Slider>
    </div>
    </>
  )
}

export default FreeBook