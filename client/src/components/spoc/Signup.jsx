import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SpocDetailsForm from './SpocDetailsForm';
import UniversityDetailsForm from './UniversityDetailsForm';

const SignupSPOC = ({ role }) => {
  const navigate = useNavigate();
  const [next, setNext] = useState(false);

  return (
    <>
      <div className='flex flex-col justify-start mx-4 my-6 p-4 h-[70%] bg-white w-full sm:max-w-2xl shadow-md rounded-md overflow-auto'>

        {/* Organization Name */}
        <div className='flex items-center gap-2 justify-start w-full sm:items-start text-accent-indigo'>
          <img className='w-16 h-16 hover:cursor-pointer' src='../images/965230-200.png' onClick={() => navigate("/")} alt="" />
          <h3 className='mt-3 text-3xl font-medium'>Student Innovation Hub</h3>
        </div>

        <h4 className='mt-6 text-2xl font-normal'>Welcome to SIH!</h4>
        <p className='mt-2 text-start text-accent-gray'>Please register your account and start the adventure</p>

        {/* Form */}
        {next ? (
          <SpocDetailsForm setNext={setNext} />
        ) : (
          <UniversityDetailsForm setNext={setNext} />
        )}

        <p className='mt-3 text-accent-gray'>or</p>

        <div className='flex items-start justify-between w-full my-4'>
          <p>Already have an account?</p>
          <Link className='text-accent-indigo' to={`/${role}/signin`}>Signin</Link>
        </div>
      </div>
    </>
  );
};

export default SignupSPOC;
