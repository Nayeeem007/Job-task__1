import React from 'react';

const AllCollege = ({ college }) => {
    const { _id, img, admissionDate, collegeName, details, events, id, researchHistory, sports } = college
    return (
        <div className='flex justify-between p-3 border border-white rounded-lg items-center mb-6'>
            <div>
                <img className='w-32 h-32 rounded-lg' src={img} alt="" />
                <h3 className='text-2xl font-semibold '>{collegeName}</h3>
            </div>
            <div>
                <h5 className='text-xl font-semibold'>Events : {events}</h5>
                <h5  className='text-xl font-semibold'>Sports : {sports}</h5>
            </div>
        </div>
    );
};

export default AllCollege;