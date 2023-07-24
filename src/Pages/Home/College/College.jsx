import React from 'react';
import { Link } from 'react-router-dom';

const College = ({college}) => {
    // console.log(college)
    const{_id,img,admissionDate,collegeName,details,events,id,researchHistory,sports}=college

    return (
        <div className=' border-4 border-white p-3 rounded-lg '>
            <img className='w-full h-64 rounded-lg' src={img} alt="" />
            <h1 className='text-2xl font-semibold py-3'><span className='text-yellow-600'>College Name : </span>{collegeName}</h1>
            <h3 className='text-xl font-semibold pb-2'><span className='text-yellow-600'>Admission Date : </span>{admissionDate}</h3>
            <h4 className='text-xl'><span className='text-yellow-600'>Event :</span> {events}</h4>
            <h4 className='text-xl '> <span className='text-yellow-600'>Sports :</span> {sports}</h4>
        </div>
    );
};

export default College;