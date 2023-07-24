import React from 'react';
import Search from '../Search/Search';
import Slider from '../../../Slider/Slider';
import Research from '../../../Research/Research';
import Review from '../../../Review/Review';
import CollegeCards from '../CollegeCards/CollegeCards';

const Home = () => {
    return (
        <div >
       <Search></Search> 
       <CollegeCards></CollegeCards>
       <Slider></Slider>
       <Research></Research>
       <Review></Review>
         </div>
    );
};

export default Home;