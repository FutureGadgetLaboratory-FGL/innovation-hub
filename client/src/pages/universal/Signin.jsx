import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SigninWindow from '../../components/universal/Signin';
import { useNavigate } from 'react-router-dom';

const Signin = ({ role }) => {
    const navigate = useNavigate();
    const user = useSelector(state => state.user.user);
    useEffect(() => {
        if (user?._id) navigate(`/${user.role}/dashboard`);
    }, [navigate, user])
    return (
        <>
            <div className='flex justify-center items-center w-100 h-screen bg-background'>
                <SigninWindow role={role} />
            </div>
        </>
    );
}

export default Signin;
