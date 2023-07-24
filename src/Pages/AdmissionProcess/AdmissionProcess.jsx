import { useEffect, useState } from "react";
import Admission from "../Admission/Admission";

const AdmissionProcess = () => {
    const [colleges, setColleges] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center text-yellow-600 py-16'>Admission Process</h1>
            {
                
                colleges.map(college=><Admissiongit init
                key={college._id}
                college={college}
                ></Admissiongit>)
            }
        </div>
    );
};

export default AdmissionProcess;