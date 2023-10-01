import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Signup from '../../components/student/Signup';
import { useSelector } from 'react-redux';
const SignupStudent = ({ role }) => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user.user);
  useEffect(() => {
    if (user?._id) navigate('/student/dashboard');
  }, [navigate, role, user])
  return (
    <>
      <div className='flex items-center justify-center h-screen py-6 overflow-auto w-100 bg-background'>
        <Signup role={role} />
      </div>

      {/* <div className='flex items-center justify-center bg-background'>
        <div className='block w-full md:w-1/2 lg:w-1/3 p-11 border-1 border-dark bg-background-light'>
          <div className='flex justify-start'>
            <img className='w-16 h-16 hover:cursor-pointer' style={{ marginTop: "-9px" }} src='../images/965230-200.png' onClick={() => navigate("/")} alt="" />
            <h3 className='text-3xl font-medium text-center mt-1 mx-1'>CODECRAFTERS</h3>

          </div>
          <h4 className='font-normal text-2xl text-start mt-2'>Adventure starts here !</h4>
          <p className='mt-2 text-start text-accent-gray'>Make your app management easy and fun!</p>

          <div className='mt-3 block'>
            <input className='my-1 border-2 border-accent-dark rounded-md h-12 p-4 w-full lg:w-80' placeholder='Name' type='text' />
            <input className='my-1 border-2 border-accent-dark rounded-md h-12 p-4 w-full lg:w-80' placeholder='E-mail' type='email' />
            <input className='my-1 border-2 border-accent-dark rounded-md h-12 p-4 w-full lg:w-80' placeholder='Password' type='password' />
            <div className='my-1 flex border-2 border-accent-dark justify-between rounded-md h-12 p-2 w-full lg:w-80'>
              <label className='text-accent-gray'>Gender  </label>
              <select className='h-6 w-24 outline-none bg-accent-dark text-background-light rounded-md'>
                <option>
                  Male
                </option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className='my-1 flex border-2 border-accent-dark justify-between rounded-md h-12 p-2 w-full lg:w-80'>
              <label className='text-accent-gray'>Role</label>
              <select className='h-6 w-24 outline-none bg-accent-dark text-background-light rounded-md' value={selectedRole} onChange={handleRoleChange}>
                <option value="1">
                  Student
                </option>
                <option value="2">SPOC</option>
                <option value="3">University Admin</option> <option value="4">Super Admin</option> <option value="5">Recruiter</option>


              </select>
            </div>


          </div>

          <div className='flex w-full lg:w-80'>

            <input type='checkbox' name="remember" />
            <span className='mx-2'>I agree to <span className='text-accent-indigo'>privacy policy & terms</span></span>
          </div>

          <div className='my-2 flex items-center justify-center text-black'>
            <button className='my-3 mr-12 text-center text-background bg-accent-indigo hover:bg-accent-indigo1 w-full lg:w-80 p-2 rounded-md' onClick={() => navigate("/")}>SIGN UP</button>
          </div>

          <div className='my-1 flex items-start justify-between w-full lg:w-80'>
            <p>Already have an account?</p>
            <Link className='text-accent-indigo' to="/login">Sign in instead</Link>
          </div>

          <div className='block w-full'>
            <p className='text-accent-gray text-center w-80'>or</p>
            <div className='grid grid-cols-1 lg:grid-cols-4 text-xl mt-1'>
              <i className="bi bi-google hover:scale-y-105"></i>
              <i className="bi bi-github hover:scale-y-105"></i>
              <i className="bi bi-facebook hover:scale-y-105"></i>
              <i className="bi bi-twitter-x hover:scale-y-105"></i>
            </div>
          </div>

        </div>
        {selectedRole === "1" && (
          <div className='block float-right mb-3 ml-10 bg-white p-3 rounded-lg border-1 border-black'>
            <Signup />
          </div>
        )}

        {(selectedRole === "2" || selectedRole === "3") && (
          <div className='block float-right mb-3 ml-10 bg-white p-3 rounded-lg border-1 border-black'>
            <SignupSPOC />
          </div>
        )}

      </div>
      {selectedRole === "2" && (
        <div className='block float-right mb-3 ml-10 bg-white p-3 rounded-lg border-1 border-black'>
          <SignupSPOC />
        </div>
      )}
      {selectedRole === "3" && (
        <div className='block float-right mb-3 ml-10 bg-white p-3 rounded-lg border-1 border-black'>
          <SignupUAdmin />
        </div>
      )} */}
    </>
  )
}

export default SignupStudent;
