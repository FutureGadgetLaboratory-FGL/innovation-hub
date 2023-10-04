import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../redux/slices/userSlice';

const PreVerification = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const handleLogout = (e) => {
        dispatch(logout());
    };
    return (
        <>
            <div className='h-screen w-screen flex flex-col justify-center items-center'>
                {
                    user?.role === "SPOC" && user?.status === "pending" && (
                        <p className='text-2xl font-semibold'>Your account is under verification. Please wait for the super admin to verify your account.</p>
                    )
                }
                {
                    user?.role === "Student" && user?.status === "pending" && (
                        <p className='text-2xl font-semibold'>Your account is under verification. Please wait for the SPOC to verify your account.</p>
                    )
                }
                {
                    user?.role === "UniversityAdmin" && user?.status === "pending" && (
                        <p className='text-2xl font-semibold'>Your account is under verification. Please wait for the SPOC to verify your account.</p>
                    )
                }
                {
                    user?.role === "Recruiter" && user?.status === "pending" && (
                        <p className='text-2xl font-semibold'>Your account is under verification. Please wait for the super admin to verify your account.</p>
                    )
                }
                <NavLink
                    to={"/"}
                    className="hover:text-slate-300"
                    onClick={handleLogout}
                >
                    <button className='bg-violet-600 text-white px-3 py-2 rounded-md mt-5 hover:bg-violet-700'>
                        Logout
                    </button>
                </NavLink>
            </div>
        </>
    )
}

export default PreVerification