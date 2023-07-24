import React, { useEffect, useState } from 'react';
import AllCollege from '../AllCollage/AllCollage';

const AllColleges = () => {
    const [colleges, setColleges] = useState([]);
    useEffect(() => {
        fetch('https://job-task-server-zeta.vercel.app/colleges')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])
    return (
        <div>
            <h1 className='text-4xl text-yellow-600 font-semibold text-center py-16'>All College are Here</h1>
            <div>
                {
                    colleges.map(college=><AllCollege
                    key={college._id}
                    college={college}
                    ></AllCollege>)
                }
            </div>
        </div>
    );
};

export default AllColleges;