import React, { useState,useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Cards from './Cards';
import axios from 'axios';
const Freebook = () => {
 const [Book, setBook] = useState([]);
       
   useEffect(()=>{
    const getBook = async ()=>{
      try {
        const res = await  axios.get('http://localhost:4001/book');
        setBook(res.data.filter((data)=> data.category === 'Free'));
        
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
   },[]);
  
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
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
    <div className='max-w-screen-2xl  container mx-auto md:px-16'>
    <div>
          <h2 className='text-xl font-bold'>Read Free Books Here</h2>
          <p>From this section, you can up to read variety of books like love story book,horror story book etc..</p>
    </div>
    <div className="slider-container">
      <Slider {...settings}>
         {Book.map((item)=>(     // (item)=>()
            <Cards item = {item} key={item.id}/>
         ))}
        
      </Slider>
    </div>

    </div>
    </>
  )
}

export default Freebook
