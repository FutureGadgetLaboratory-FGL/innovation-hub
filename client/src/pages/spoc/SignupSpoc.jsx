import React, { useEffect } from 'react'
import Signup from '../../components/spoc/Signup'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const SignupSPOC = ({ role }) => {
    const navigate = useNavigate();
    const user = useSelector(state => state.user.user);
    useEffect(() => {
        if (user?._id) navigate('/spoc/dashboard');
    }, [navigate, role, user])

    return (
        <>
            <div className='flex items-center justify-center h-screen py-6 overflow-auto w-100 bg-background'>
                <Signup role={role} />
            </div>
        </>
    )
}

export default SignupSPOC