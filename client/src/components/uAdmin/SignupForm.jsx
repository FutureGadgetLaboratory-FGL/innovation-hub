import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getUniversitiesByFilter } from '../../redux/actions/universityActions';
import { signup } from '../../redux/actions/authActions';
import { uploadImage } from '../../redux/api';
import Loading from '../universal/Loading';

const SignupForm = () => {
    const dispatch = useDispatch();
    const [uAdminData, setUAdminData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        profilePhoto: "",
        role: "UniversityAdmin",
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
        dispatch(getUniversitiesByFilter({ status: "verified" }));
    }, [dispatch]);

    const verifiedUniversities = useSelector((state) => state.university.universities);
    const loadingUniversities = useSelector((state) => state.university.loading);
    const errorUniversities = useSelector((state) => state.university.error);

    const handleUAdminData = (e) => {
        setUAdminData({ ...uAdminData, [e.target.name]: e.target.value })
    }

    const handleUAdminSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (uAdminData.password !== uAdminData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        const { url: profilePhotoUrl } = dispatch(await uploadImage(profilePhoto));
        const { url: idCardFrontUrl } = dispatch(await uploadImage(idCardFront));
        const { url: idCardBackUrl } = dispatch(await uploadImage(idCardBack));
        const uAdmin = { ...uAdminData, profilePhoto: profilePhotoUrl, idCardFront: idCardFrontUrl, idCardBack: idCardBackUrl };
        console.log(uAdmin);
        dispatch(signup(uAdmin))
            .then(() => {
                setLoading(false);
                window.location.reload();
            })
            .catch((error) => alert(error.message));
    }
    return (
        <>
            <h3 className='mt-6 text-xl font-bold'>Register as an University Admin:</h3>
            <form className='flex flex-col items-center justify-center w-full' onSubmit={handleUAdminSignup}>
                <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='Name' name='name' value={uAdminData.name} type='text' onChange={handleUAdminData} required />
                <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='E-mail' name='email' value={uAdminData.email} type='email' onChange={handleUAdminData} required />
                <select className='w-full h-12 p-2 my-3 bg-white rounded-md border-1 border-accent-gray' placeholder='Gender' name='gender' value={uAdminData.gender} type='text' onChange={handleUAdminData} required >
                    <option default value="Select your gender">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <div className='w-full my-3'>
                    <label htmlFor='profilePhoto' className='text-black text-start'>Profile Photo:</label>
                    <input className='w-full h-12 p-2 rounded-md border-1 border-accent-gray' placeholder='Profile Photo' name='profilePhoto' accept='image/*' type='file' onChange={(e) => setProfilePhoto(e.target.files[0])} />
                </div>
                <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='Password' name='password' value={uAdminData.password} type='password' onChange={handleUAdminData} required />
                <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='Confirm Password' name='confirmPassword' value={uAdminData.confirmPassword} type='password' onChange={handleUAdminData} required />
                <select className='w-full h-12 p-2 my-3 bg-white rounded-md border-1 border-accent-gray' placeholder='University' name='university' value={uAdminData.university} type='text' onChange={handleUAdminData} required >
                    <option default value={null}>Select University</option>
                    {
                        loadingUniversities ? (
                            <option value={null}>Loading...</option>
                        ) : errorUniversities ? (
                            <option value={null}>Error</option>
                        ) : (
                            verifiedUniversities.map((university, index) => (
                                <option key={index} value={university._id}>{university.name}</option>
                            ))
                        )
                    }
                </select>
                <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='Work Email' name='workEmail' value={uAdminData.workEmail} type='email' onChange={handleUAdminData} />
                <div className='w-full my-3'>
                    <label htmlFor='idCardFront' className='text-black text-start'>ID Card Front:</label>
                    <input className='w-full h-12 p-2 rounded-md border-1 border-accent-gray' name='idCardFront' accept='image/*' type='file' onChange={(e) => setIdCardFront(e.target.files[0])} required />
                </div>
                <div className='w-full my-3'>
                    <label htmlFor='idCardBack' className='text-black text-start'>ID Card Back:</label>
                    <input className='w-full h-12 p-2 rounded-md border-1 border-accent-gray' name='idCardBack' accept='image/*' type='file' onChange={(e) => setIdCardBack(e.target.files[0])} required />
                </div>
                <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='Enrollment Number' name='enrollment' value={uAdminData.enrollment} type='text' onChange={handleUAdminData} required />

                <div className='flex items-center justify-center w-full mt-2 text-black'>
                    <button type='submit' className='w-full p-2 my-3 text-center rounded-md text-background bg-accent-indigo hover:bg-accent-indigo1'>SIGN UP</button>
                </div>
            </form>
            {
                loading && <Loading />
            }
        </>
    )
}

export default SignupForm;