import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom'
import { signin } from '../../redux/actions/authActions';
import Loading from './Loading';

const Signin = ({ role }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [signinData, setSigninData] = useState({
        email: "",
        password: "",
    });

    const handleSigninData = (e) => {
        setSigninData({ ...signinData, [e.target.name]: e.target.value })
    }

    const handleSignin = (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(signinData);
        dispatch(signin(signinData))
            .then(() => {
                setLoading(false);
                window.location.reload();
            })
            .catch((error) => alert(error.message));
    }

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
                <form className='mt-3 w-full flex flex-col items-center justify-center' onSubmit={handleSignin}>
                    <input className='my-3 border-1 border-accent-gray rounded-md h-12 p-4 w-full' placeholder='E-mail' name='email' value={signinData.email} type='email' onChange={handleSigninData} required />
                    <input className='my-3 border-1 border-accent-gray rounded-md h-12 p-4 w-full' placeholder='Password' name='password' value={signinData.password} type='password' onChange={handleSigninData} required />

                    <div className='flex justify-between w-full'>
                        <div>
                            <input type='checkbox' name="remember" />
                            <span className='mx-2'>Remember Me</span>
                        </div>
                        <Link className="text-accent-indigo">Forgot Password?</Link>
                    </div>

                    <div className='mt-2 w-full flex items-center justify-center text-black'>
                        <button type='submit' className='my-3 text-center text-background bg-accent-indigo hover:bg-accent-indigo1 w-full p-2 rounded-md' >SIGN IN</button>
                    </div>
                </form>

                <div className='my-4 flex items-start justify-between w-full'>
                    <p>New on our platform?</p>
                    <Link className='text-accent-indigo' to={`/${role}/signup`}>Create an account</Link>
                </div>
                
            </div>
            {
                loading && <Loading />
            }
        </>
    )
}

export default Signin