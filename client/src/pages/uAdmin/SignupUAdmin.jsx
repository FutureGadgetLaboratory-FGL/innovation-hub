import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useSelector } from 'react-redux';
import Signup from '../../components/uAdmin/Signup';


const SignupUAdmin = ({ role }) => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user.user);
  useEffect(() => {
    if (user?._id) navigate('/uadmin/dashboard');
  }, [navigate, role, user])
  return (
    <>
      <div className='flex justify-center items-center w-100 h-screen bg-background'>
        <Signup role={role} />
      </div>
    </>
  );
}

export default SignupUAdmin;
