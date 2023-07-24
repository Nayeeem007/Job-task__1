import React from 'react';
import Marquee from "react-fast-marquee";
import './slider.css'
import img1 from '../assets/download (1).jpeg'
import img2 from '../assets/download (2).jpeg'
import img3 from '../assets/download (3).jpeg'
import img4 from '../assets/download (4).jpeg'
import img5 from '../assets/download (5).jpeg'
import img6 from '../assets/download (6).jpeg'
import img7 from '../assets/download.jpeg'
import img8 from '../assets/images.jpeg'
 
const Slider = () => {
    return (
  <div>
    <h1 className='text-center text-3xl font-semibold my-5 text-yellow-600'>College Image gallery</h1>
         <marquee behavior="" direction="">
              <div className='flex gap-5 slider'> 
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
        </div>

        </marquee>
        </div>
    );
    
};

export default Slider;