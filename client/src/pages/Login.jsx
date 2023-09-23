import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../redux/actions/authActions';

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const [formData, setFormData] = useState({ email: '', password: '' });
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  useEffect(() => {
    dispatch(signin(formData));
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(formData));
  };
  return (
    <>
      <div className='flex items-center justify-center bg-background'>
        <div className='block w-full md:w-1/2 lg:w-1/3 p-11 border-1 border-dark bg-background-light'>
          <div className='flex justify-start'>
            <img className='w-16 h-16 hover:cursor-pointer' src='../images/965230-200.png' onClick={() => navigate("/")} alt="" />
            <h3 className='text-3xl font-medium text-center mt-3'>CODECRAFTERS</h3>

          </div>

          <h4 className='font-normal text-2xl text-start mt-6'>Welcome to GitPro !</h4>
          <p className='mt-2 text-start text-accent-gray'>Please sign-in to your account and start the adventure</p>

          <form onSubmit={handleSubmit} className='mt-6'>
            <input className='my-3 border-2 border-accent-dark rounded-md h-12 p-4 w-full lg:w-80' placeholder='E-mail' type='email' onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <input className='my-3 border-2 border-accent-dark rounded-md h-12 p-4 w-full lg:w-80' placeholder='Password' type='password' onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
          </form>

          <div className='flex justify-around w-full lg:w-80'>
            <div>
              <input type='checkbox' name="remember" />
              <span className='mx-2'>Remember Me</span>
            </div>
            <Link className="text-accent-indigo">Forgot Password?</Link>
          </div>

          <div className='my-4 flex items-center justify-center text-black'>
            <button className='my-3 mr-12 text-center text-background bg-accent-indigo hover:bg-accent-indigo1 w-full lg:w-80 p-2 rounded-md' onClick={() => navigate("/")}>SIGN IN</button>
          </div>

          <div className='my-4 flex items-start justify-between w-full lg:w-80'>
            <p>New on our platform?</p>
            <Link className='text-accent-indigo' to="/signup">Create an account</Link>
          </div>

          <div className='block w-full'>
            <p className='text-accent-gray text-center w-80'>or</p>
            <div className='grid grid-cols-1 lg:grid-cols-4 text-xl mt-4'>
              <i className="bi bi-google hover:scale-y-105"></i>
              <i className="bi bi-github hover:scale-y-105"></i>
              <i className="bi bi-facebook hover:scale-y-105"></i>
              <i class="bi bi-twitter-x hover:scale-y-105"></i>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Login
