import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUniversitiesByFilter } from '../../redux/actions/universityActions';
import { signup } from '../../redux/actions/authActions';
import { uploadImage } from '../../redux/api';
import Loading from '../universal/Loading';

const SignupForm = () => {
    const dispatch = useDispatch();
    const [studentData, setStudentData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        profilePhoto: "",
        role: "Student",
        university: "",
        course: "",
        workEmail: "",
        startYear: "",
        endYear: "",
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

    const unverifiedUniversities = useSelector((state) => state.university.universities);
    const loadingUniversities = useSelector((state) => state.university.loading);
    const errorUniversities = useSelector((state) => state.university.error);

    const handleStudentData = (e) => {
        setStudentData({ ...studentData, [e.target.name]: e.target.value })
    }

    const handleStudentSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (studentData.password !== studentData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        const { url: profilePhotoUrl } = dispatch(await uploadImage(profilePhoto));
        const { url: idCardFrontUrl } = dispatch(await uploadImage(idCardFront));
        const { url: idCardBackUrl } = dispatch(await uploadImage(idCardBack));
        const student = { ...studentData, profilePhoto: profilePhotoUrl, idCardFront: idCardFrontUrl, idCardBack: idCardBackUrl };
        console.log(student);
        dispatch(signup(student))
            .then(() => {
                setLoading(false);
                window.location.reload();
            })
            .catch((error) => alert(error.message));
    }
    return (
        <>
            <form className='flex flex-col items-center justify-center w-full' onSubmit={handleStudentSignup}>
                <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='Name' name='name' value={studentData.name} type='text' onChange={handleStudentData} required />
                <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='E-mail' name='email' value={studentData.email} type='email' onChange={handleStudentData} required />
                <select className='w-full h-12 p-2 my-3 bg-white rounded-md border-1 border-accent-gray' placeholder='Gender' name='gender' value={studentData.gender} type='text' onChange={handleStudentData} required >
                    <option default value="Select your gender">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <div className='w-full my-3'>
                    <label htmlFor='profilePhoto' className='text-black text-start'>Profile Photo:</label>
                    <input className='w-full h-12 p-2 rounded-md border-1 border-accent-gray' placeholder='Profile Photo' name='profilePhoto' accept='image/*' type='file' onChange={(e) => setProfilePhoto(e.target.files[0])} />
                </div>
                <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='Password' name='password' value={studentData.password} type='password' onChange={handleStudentData} required />
                <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='Confirm Password' name='confirmPassword' value={studentData.confirmPassword} type='password' onChange={handleStudentData} required />
                <select className='w-full h-12 p-2 my-3 bg-white rounded-md border-1 border-accent-gray' placeholder='University' name='university' value={studentData.university} type='text' onChange={handleStudentData} required >
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
                <select className='w-full h-12 p-2 my-3 bg-white rounded-md border-1 border-accent-gray' placeholder='Course' name='course' value={studentData.course} type='text' onChange={handleStudentData} required >
                    <option default value={null}>Select Course</option>
                    <option value={"Computer Science"}>Computer Science</option>
                    <option value={"Electrical Engineering"}>Electrical Engineering</option>
                    <option value={"Mechanical Engineering"}>Mechanical Engineering</option>
                </select>
                <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='Work Email' name='workEmail' value={studentData.workEmail} type='email' onChange={handleStudentData} />
                <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='Start Year' name='startYear' value={studentData.startYear} type='number' onChange={handleStudentData} />
                <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='End Year' name='endYear' value={studentData.endYear} type='number' onChange={handleStudentData} />
                <div className='w-full my-3'>
                    <label htmlFor='idCardFront' className='text-black text-start'>ID Card Front:</label>
                    <input className='w-full h-12 p-2 rounded-md border-1 border-accent-gray' name='idCardFront' accept='image/*' type='file' onChange={(e) => setIdCardFront(e.target.files[0])} required />
                </div>
                <div className='w-full my-3'>
                    <label htmlFor='idCardBack' className='text-black text-start'>ID Card Back:</label>
                    <input className='w-full h-12 p-2 rounded-md border-1 border-accent-gray' name='idCardBack' accept='image/*' type='file' onChange={(e) => setIdCardBack(e.target.files[0])} required />
                </div>
                <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='Enrollment Number' name='enrollment' value={studentData.enrollment} type='text' onChange={handleStudentData} required />

                <div className='flex items-center justify-center w-full mt-2 text-black'>
                    <button type='submit' className='w-full p-2 my-3 text-center rounded-md text-background bg-accent-indigo hover:bg-accent-indigo1'>SIGN UP</button>
                </div>
            </form>
            {loading && <Loading />}
        </>
    )
}

export default SignupForm