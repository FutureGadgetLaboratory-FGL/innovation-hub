import React from 'react';
import Signup from '../../components/superAdmin/Signup';

const SignupSuperAdmin = ({ role }) => {
  return (
    <>
      <div className='flex justify-center items-center w-100 h-screen bg-background'>
        <Signup role={role} />
      </div>
    </>
  );
}

export default SignupSuperAdmin;
