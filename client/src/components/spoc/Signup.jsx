import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupSPOC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='flex flex-col justify-center mx-4 my-6 p-4 bg-white w-full sm:max-w-md shadow-md rounded-md '>

        {/* Organization Name */}
        <div className='flex items-center sm:items-start w-full justify-start'>
          <img className='w-16 h-16 hover:cursor-pointer' src='../images/965230-200.png' onClick={() => navigate("/")} alt="" />
          <h3 className='text-3xl font-medium mt-3'>Student Innovation Hub</h3>
        </div>

        <h4 className='font-normal text-2xl mt-6'>Welcome to SIH!</h4>
        <p className='mt-2 text-start text-accent-gray'>Please sign-in to your account and start the adventure</p>

        {/* Form */}
        <form className='mt-6 w-full flex flex-col items-center justify-center'>
          <input className='my-3 border-1 border-accent-gray rounded-md h-12 p-4 w-full' placeholder='E-mail' type='email' />
        </form>
      </div>
    </>
  );
};

export default SignupSPOC;
