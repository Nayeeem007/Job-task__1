import React from 'react';

const Admission = ({college}) => {
    const { _id, img, admissionDate, collegeName, details, events, id, researchHistory, sports } = college
    return (
        <div className='flex justify-between items-center p-4 border border-white rounded-lg gap-6 mb-5'>
            <div >
                <img className=' rounded-lg' src={img} alt="" />
            </div>
            <div>
                <h1 className='text-2xl font-semibold text-yellow-600'>{collegeName}</h1>
                <h5>{details}</h5>

            </div>
        </div>
    );
};

export default Admission;