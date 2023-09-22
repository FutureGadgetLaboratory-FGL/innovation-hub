import { React, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUniversities, registerUniversity } from '../redux/actions/universityActions';
import { signup } from '../redux/actions/authActions';
import { uploadFile } from '../redux/api';

const Signup = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUniversities());
  }, [dispatch]);
  const universities = useSelector((state) => state.university.universities);
  const loading = useSelector((state) => state.university.loading);
  const error = useSelector((state) => state.university.error);
  const [universityDetails, setUniversityDetails] = useState({ email: null, address: null, city: null, state: null, country: null });
  const [idCardFront, setIdCardFront] = useState(null);
  const [idCardBack, setIdCardBack] = useState(null);
  const [prevpanel, setNextPanel] = useState(false);
  const [formData, setFormData] = useState({ name: null, email: null, password: null, confirmPassword: null, gender: "Male", role: "Student" });

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (formData.role === "Student") {
      if (formData.university === null || formData.enrollment === null || formData.course === null || formData.startYear === null || formData.endYear === null) {
        alert("Please fill all the fields of student");
        return;
      }
    }
    if (formData.role === "Spoc") {
      if (universityDetails.email === null || universityDetails.address === null || universityDetails.city === null || universityDetails.state === null || universityDetails.country === null) {
        alert("Please fill all the fields of spoc");
        return;
      } else {
        dispatch(registerUniversity(universityDetails));
      }
      // }
      // const idCardFrontURL = await uploadFile(idCardFront);
      // const idCardBackURL = await uploadFile(idCardBack);
      // setFormData({ ...formData, idCardFront: idCardFrontURL, idCardBack: idCardBackURL });
      setFormData({ ...formData });
      dispatch(signup(formData)
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        })
      );
    };

    if (loading) {
      return <h1>Loading...</h1>;
    }

    if (error) {
      return <h1>Error...</h1>;
    }

    return (
      <>
        <div className='flex h-screen w-screen items-center justify-center bg-background'>
          <div className='block w-full md:w-1/2 lg:w-1/3 p-11 rounded-xl shadow-md bg-background-light'>
            <div className='flex justify-start'>
              <img className='w-16 h-16 hover:cursor-pointer' style={{ marginTop: "-9px" }} src='../images/965230-200.png' onClick={() => navigate("/")} alt="" />
              <h3 className='text-3xl font-medium text-center mt-1 mx-1'>CODECRAFTERS</h3>
            </div>
            <h4 className='font-normal text-2xl text-start mt-2'>Adventure starts here !</h4>
            <p className='mt-2 text-start text-accent-gray'>Make your app management easy and fun!</p>

            <form className='mt-3 flex flex-col items-center justify-center w-full' onSubmit={handleSignup}>
              <input className='my-1 border-2 border-accent-gray rounded-md h-12 p-4 w-full' placeholder='Name' type='text' onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              <input className='my-1 border-2 border-accent-gray rounded-md h-12 p-4 w-full' placeholder='E-mail' type='email' onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              <input className='my-1 border-2 border-accent-gray rounded-md h-12 p-4 w-full' placeholder='Password' type='password' onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
              <input className='my-1 border-2 border-accent-gray rounded-md h-12 p-4 w-full' placeholder='Confirm Password' type='password' onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} />
              <select className='form-select my-1 flex border-2 border-accent-gray justify-between rounded-md h-12 p-2 w-full' placeholder='Gender' defaultValue="Male" onChange={(e) => setFormData({ ...formData, gender: e.target.value })}>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <select className='form-select my-1 flex border-2 border-accent-gray justify-between rounded-md h-12 p-2 w-full' defaultValue="Student" onChange={(e) => setFormData({ ...formData, role: e.target.value })}>
                <option value="Student">Student</option>
                <option value="Spoc">SPOC</option>
                <option value="UniversityAdmin">University Admin</option>
                <option value="Recruiter">Recruiter</option>
              </select>
              <div className='flex justify-start w-full'>
                <input type='checkbox' name="remember" />
                <span className='mx-2'>I agree to <span className='text-accent-indigo'>privacy policy & terms</span></span>
              </div>
              <div className='my-2 flex items-center justify-center text-black'>
                <button className='my-3 mr-12 text-center text-background bg-accent-indigo hover:bg-accent-indigo1 w-full lg:w-80 p-2 rounded-md' type='submit'>SIGN UP</button>
              </div>
            </form>

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
          {formData.role === "Student" && (
            <div className='block float-right mb-3 ml-10 bg-white p-3 rounded-lg shadow-md border-black'>
              <div className='mb-3'>
                <label htmlFor='selectUniversity' className="form-label">University</label>
                <select className="form-select" id='selectUniversity' onChange={(e) => setFormData({ ...formData, university: e.target.value })}>
                  {loading ? (
                    <option>Loading...</option>
                  ) : (
                    universities.map((university, index) => {
                      return <option key={index} value={university._id}>{university.name}</option>
                    })
                  )}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="text" className="form-label">Enrollment Number</label>
                <input className="form-control" type="text" id="text" value={formData.enrollment} onChange={(e) => setFormData({ ...formData, enrollment: e.target.value })} />
              </div>
              <div className="mb-3">
                <label htmlFor="text" className="form-label">Choose Course</label>
                <select defaultValue='Computer Science' className="form-select" aria-label="Default select example" value={formData.course} onChange={(e) => setFormData({ ...formData, course: e.target.value })}>
                  <option>Computer Science</option>
                  <option>Electrical Engineering</option>
                  <option>Mechanical Engineering</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="studentEmail" className="form-label" >Work Email</label>
                <input className="form-control" type="email" id="studentEmail" required onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })} />
              </div>
              <div className="mb-3">
                <label htmlFor="startYear" className="form-label">Duration</label>
                <input className="mb-3 form-control form-control-sm" placeholder="Start Year" id="startYear" type="number" onChange={(e) => setFormData({ ...formData, startYear: e.target.value })} />
                <input className="form-control form-control-sm" placeholder="End Year" id="endYear" type="number" onChange={(e) => setFormData({ ...formData, endYear: e.target.value })} />
              </div>
              <div className="mb-3">
                <label htmlFor="idCardFront" className="form-label">ID Card Front</label>
                <input className="form-control" type="file" id="idCardFront" multiple onChange={(e) => setIdCardFront(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="idCardBack" className="form-label">ID Card Back</label>
                <input className="form-control" type="file" id="idCardBack" multiple onChange={(e) => setIdCardBack(e.target.value)} />
              </div>
            </div>
          )}

          {(formData.role === "Spoc" || formData.role === "UniversityAdmin") && (
            <div className='block float-right mb-3 ml-10 bg-white p-3 rounded-lg shadow-md border-black'>
              {!prevpanel && formData.role === "Spoc" || formData.role === "UniversityAdmin" ? (
                <>
                  {formData.role !== "Spoc" && (
                    <div className='mb-3'>
                      <label htmlFor='selectUniversity' className="form-label">University</label>
                      <select className="form-select" id='selectUniversity' onChange={(e) => setFormData({ ...formData, university: e.target.value })}>
                        {loading ? (
                          <option>Loading...</option>
                        ) : (
                          universities.map((university, index) => {
                            return <option key={index} value={university._id}>{university.name}</option>
                          })
                        )}
                      </select>
                    </div>
                  )}
                  <div className="mb-3">
                    <label htmlFor="enrollment" className="form-label">
                      Enrollment Number
                    </label>
                    <input className="form-control" type="text" id="enrollment" value={formData.enrollment} onChange={(e) => setFormData({ ...formData, enrollment: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="workEmail" className="form-label">
                      Work Email
                    </label>
                    <input className="form-control" type="email" id="workEmail" value={formData.workEmail} onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })} />
                  </div>
                  {/* 
                <div className="mb-3">
                  <label htmlFor="idCardFront" className="form-label">ID Card Front</label>
                  <input className="form-control" type="file" id="idCardFront" onChange={(e) => { setIdCardFront(e.target.files[0]); console.log(e.target.files[0])}} />
                </div>
                <div className="mb-3">
                  <label htmlFor="idCardBack" className="form-label">ID Card Back</label>
                  <input className="form-control" type="file" id="idCardBack" multiple onChange={(e) => { setIdCardBack(e.target.files[0]); console.log(e.target.value) }} />
                </div> */}
                  {formData.role === "Spoc" && (
                    <button className="btn btn-primary float-right" onClick={() => { setNextPanel(true); console.log(formData) }}>
                      Next
                    </button>
                  )}
                </>
              ) : formData.role === "Spoc" && (
                <form>
                  <h4 className='mb-2 text-center font-semibold underline text-lg'>Univeristy Details</h4>

                  <div className='mb-3 w-80'>
                    <label htmlFor="universityName" className="form-label">
                      Name
                    </label>
                    <input className="form-control" type="text" id="universityName" value={universityDetails.name} required onChange={(e) => setUniversityDetails({ ...universityDetails, name: e.target.value })} />
                  </div>
                  <div className="mb-3 w-80">
                    <label htmlFor="universityEmail" className="form-label">
                      Email
                    </label>
                    <input className="form-control" type="email" id="universityEmail" value={universityDetails.email} required onChange={(e) => setUniversityDetails({ ...universityDetails, email: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input className="form-control" type="text" id="address" required value={universityDetails.address} onChange={(e) => setUniversityDetails({ ...universityDetails, address: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="city" className="form-label">
                      City
                    </label>
                    <input className="form-control" type="text" id="city" required value={universityDetails.city} onChange={(e) => setUniversityDetails({ ...universityDetails, city: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="state" className="form-label">
                      State
                    </label>
                    <input className="form-control" type="text" id="state" required value={universityDetails.state} onChange={(e) => setUniversityDetails({ ...universityDetails, state: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="country" className="form-label">
                      Country
                    </label>
                    <input className="form-control" type="text" id="country" required value={universityDetails.country} onChange={(e) => setUniversityDetails({ ...universityDetails, country: e.target.value })} />
                  </div>
                  {formData.role === "Spoc" && (
                    <button className="btn btn-primary float-right" onClick={() => { setNextPanel(false); console.log(universityDetails) }}>
                      Previous
                    </button>
                  )}
                </form>
              )}
            </div>
          )}
        </div>
      </>
    )
  }
}

export default Signup
