import React, { useEffect, useState } from 'react';
import College from '../College/College';
import Marquee from "react-fast-marquee";


const CollegeCards = () => {
    const [colleges, setColleges] = useState([]);
    useEffect(() => {
        fetch('https://job-task-server-zeta.vercel.app/colleges')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])
    const newColleges = colleges.slice(0, 3)
    // console.log(newColleges)

    return (
        <div>
            <div className='w-3/4 mx-auto'>
                <Marquee>
                    <h1 className='text-3xl text-yellow-600 mb-12 '>Some colleges are here</h1>
                </Marquee>
            </div>

            <div className='md:flex gap-4'>
                {
                    newColleges.map(college => <College
                        key={college._id}
                        college={college}
                    ></College>)
                }

            </div>

        </div>
    );
};

export default CollegeCards;