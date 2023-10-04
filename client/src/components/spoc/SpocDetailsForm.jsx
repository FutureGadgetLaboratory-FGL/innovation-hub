import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getUniversitiesByFilter } from '../../redux/actions/universityActions';
import { signup } from '../../redux/actions/authActions';
import { uploadImage } from '../../redux/api';
import Loading from '../universal/Loading';

const SpocDetailsForm = ({ setNext }) => {
    const dispatch = useDispatch();
    const [spocData, setSpocData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        profilePhoto: "",
        role: "SPOC",
        university: "",
        workEmail: "",
        idCardFront: "",
        idCardBack: "",
        enrollment: "",
    });
    const [loading, setLoading] = useState(false);
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [idCardFront, setIdCardFront] = useState(null);
    const [idCardBack, setIdCardBack] = useState(null);

    useEffect(() => {
        dispatch(getUniversitiesByFilter({ status: "pending" }));
    }, [dispatch]);

    const unverifiedUniversities = useSelector((state) => state.university.universities);
    const loadingUniversities = useSelector((state) => state.university.loading);
    const errorUniversities = useSelector((state) => state.university.error);

    const handleSpocData = (e) => {
        setSpocData({ ...spocData, [e.target.name]: e.target.value })
    }

    const handleSpocSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (spocData.password !== spocData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        const { url: profilePhotoUrl } = dispatch(await uploadImage(profilePhoto));
        const { url: idCardFrontUrl } = dispatch(await uploadImage(idCardFront));
        const { url: idCardBackUrl } = dispatch(await uploadImage(idCardBack));
        const spoc = { ...spocData, profilePhoto: profilePhotoUrl, idCardFront: idCardFrontUrl, idCardBack: idCardBackUrl };
        console.log(spoc);
        dispatch(signup(spoc))
            .then(() => {
                setLoading(false);
                window.location.reload()
            })
            .catch((error) => alert(error.message));
    }
    return (
        <>
            <h3 className='mt-6 text-xl font-bold'>Register as a SPOC:</h3>
            <form className='flex flex-col items-center justify-center w-full' onSubmit={handleSpocSignup}>
                <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='Name' name='name' value={spocData.name} type='text' onChange={handleSpocData} required />
                <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='E-mail' name='email' value={spocData.email} type='email' onChange={handleSpocData} required />
                <select className='w-full h-12 p-2 my-3 bg-white rounded-md border-1 border-accent-gray' placeholder='Gender' name='gender' value={spocData.gender} type='text' onChange={handleSpocData} required >
                    <option default value="Select your gender">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <div className='w-full my-3'>
                    <label htmlFor='profilePhoto' className='text-black text-start'>Profile Photo:</label>
                    <input className='w-full h-12 p-2 rounded-md border-1 border-accent-gray' placeholder='Profile Photo' name='profilePhoto' accept='image/*' type='file' onChange={(e) => setProfilePhoto(e.target.files[0])} />
                </div>
                <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='Password' name='password' value={spocData.password} type='password' onChange={handleSpocData} required />
                <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='Confirm Password' name='confirmPassword' value={spocData.confirmPassword} type='password' onChange={handleSpocData} required />
                <select className='w-full h-12 p-2 my-3 bg-white rounded-md border-1 border-accent-gray' placeholder='University' name='university' value={spocData.university} type='text' onChange={handleSpocData} required >
                    <option default value={null}>Select University</option>
                    {
                        loadingUniversities ? (
                            <option value={null}>Loading...</option>
                        ) : errorUniversities ? (
                            <option value={null}>Error</option>
                        ) : (
                            unverifiedUniversities.map((university, index) => (
                                <option key={index} value={university._id}>{university.name}</option>
                            ))
                        )
                    }
                </select>
                <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='Work Email' name='workEmail' value={spocData.workEmail} type='email' onChange={handleSpocData} />
                <div className='w-full my-3'>
                    <label htmlFor='idCardFront' className='text-black text-start'>ID Card Front:</label>
                    <input className='w-full h-12 p-2 rounded-md border-1 border-accent-gray' name='idCardFront' accept='image/*' type='file' onChange={(e) => setIdCardFront(e.target.files[0])} required />
                </div>
                <div className='w-full my-3'>
                    <label htmlFor='idCardBack' className='text-black text-start'>ID Card Back:</label>
                    <input className='w-full h-12 p-2 rounded-md border-1 border-accent-gray' name='idCardBack' accept='image/*' type='file' onChange={(e) => setIdCardBack(e.target.files[0])} required />
                </div>
                <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='Enrollment Number' name='enrollment' value={spocData.enrollment} type='text' onChange={handleSpocData} required />

                <div className='flex items-center justify-center w-full mt-2 text-black'>
                    <button type='submit' className='w-full p-2 my-3 text-center rounded-md text-background bg-accent-indigo hover:bg-accent-indigo1'>SIGN UP</button>
                </div>
            </form>
            <div className='flex items-start justify-between w-full'>
                <p>University does not appear in dropdown?</p>
                <p className='cursor-pointer text-accent-indigo' onClick={() => setNext(false)}>Register your University first</p>
            </div>
            {loading && <Loading />}
        </>
    )
}

export default SpocDetailsForm