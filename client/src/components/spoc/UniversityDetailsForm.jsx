import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerUniversity } from '../../redux/actions/universityActions';
import Loading from '../universal/Loading';

const UniversityDetailsForm = ({ setNext }) => {
    const dispatch = useDispatch();
    const [universityData, setUniversityData] = useState({
        name: "",
        email: "",
        area: "",
        city: "",
        state: "",
        pincode: "",
    });
    const [loading, setLoading] = useState(false);

    const handleUniversityData = (e) => {
        setUniversityData({ ...universityData, [e.target.name]: e.target.value })
    }

    const handleUniversityRegister = (e) => {
        e.preventDefault();
        setLoading(true);
        dispatch(registerUniversity(universityData))
            .then(() => {
                setLoading(false);
                setNext(true);
            });
    }
    return (
        <>
            <p className='mt-3 text-accent-gray'>Want to register as a SPOC?</p>
            <h3 className='text-xl font-bold'>Register your university first:</h3>
            <form className='flex flex-col items-center justify-center w-full' onSubmit={handleUniversityRegister}>
                <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='Name' name='name' value={universityData.name} type='text' onChange={handleUniversityData} required />
                <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='Area' name='area' value={universityData.area} type='text' onChange={handleUniversityData} required />
                <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='City' name='city' value={universityData.city} type='text' onChange={handleUniversityData} required />
                <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='State' name='state' value={universityData.state} type='text' onChange={handleUniversityData} required />
                <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='Country' name='country' value={universityData.country} type='text' onChange={handleUniversityData} required />
                <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='Pincode' name='pincode' value={universityData.pincode} type='number' onChange={handleUniversityData} required />
                <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='University Email' name='email' value={universityData.email} type='email' onChange={handleUniversityData} required />

                <div className='flex items-center justify-center w-full mt-2 text-black'>
                    <button type='submit' className='w-full p-2 my-3 text-center rounded-md text-background bg-accent-indigo hover:bg-accent-indigo1'>REGISTER</button>
                </div>
            </form>
            <div className='flex items-start justify-between w-full'>
                <p>Already registered your University?</p>
                <p className='cursor-pointer text-accent-indigo' onClick={() => setNext(true)}>Proceed to signup</p>
            </div>
            {
                loading && <Loading />
            }
        </>
    )
}

export default UniversityDetailsForm