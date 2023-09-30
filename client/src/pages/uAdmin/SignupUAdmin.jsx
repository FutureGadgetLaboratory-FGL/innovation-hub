import React from 'react';
import Signup from '../../components/uAdmin/Signup';

const SignupUAdmin = ({ role }) => {
  return (
    <>
      <div className='flex justify-center items-center w-100 h-screen bg-background'>
        <Signup role={role} />
      </div>
    </>
  );
}

export default SignupUAdmin;
