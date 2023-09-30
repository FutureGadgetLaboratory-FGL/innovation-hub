import React from 'react';
import SigninWindow from '../../components/universal/Signin';

const Signin = ({ role }) => {
    return (
        <>
            <div className='flex justify-center items-center w-100 h-screen bg-background'>
                <SigninWindow role={role} />
            </div>
        </>
    );
}

export default Signin;
