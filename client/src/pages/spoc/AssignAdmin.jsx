import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUniversityAdminsByUniversityId, updateUniversityAdminStatus } from "../../redux/actions/universityAdminActions";
import { uploadImage } from "../../redux/api";
import { assignUAdmin } from "../../redux/actions/spocActions";

const AssignAdmin = () => {
  const adminDetails = useSelector(state => state.uAdmin.uAdmins);
  const currentAdmins = adminDetails.filter(admin => { if (admin.status === "verified") return admin; })
  const user = useSelector(state => state.user.user);

  const dispatch = useDispatch();
  const [uAdminData, setUAdminData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    profilePhoto: "",
    role: "UniversityAdmin",
    university: user.university,
    workEmail: "",
    idCardFront: "",
    idCardBack: "",
    enrollment: "",
  });
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [idCardFront, setIdCardFront] = useState(null);
  const [idCardBack, setIdCardBack] = useState(null);

  useEffect(() => {
    dispatch(getUniversityAdminsByUniversityId(user.university));
  }, [dispatch]);

  const handleUAdminData = (e) => {
    setUAdminData({ ...uAdminData, [e.target.name]: e.target.value })
  }

  const handleUAdminSignup = async (e) => {
    e.preventDefault();
    if (uAdminData.password !== uAdminData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const { url: profilePhotoUrl } = dispatch(await uploadImage(profilePhoto));
    const { url: idCardFrontUrl } = dispatch(await uploadImage(idCardFront));
    const { url: idCardBackUrl } = dispatch(await uploadImage(idCardBack));
    const uAdmin = { ...uAdminData, role: "UniversityAdmin", profilePhoto: profilePhotoUrl, idCardFront: idCardFrontUrl, idCardBack: idCardBackUrl };
    dispatch(assignUAdmin(uAdmin))
      .then(() => window.location.reload())
      .catch((error) => alert(error.message));
  }

  const verifyUAdmin = (uAdmin) => {
    dispatch(updateUniversityAdminStatus({ id: uAdmin._id, status: "verified" }))
      .then(() => getUniversityAdminsByUniversityId(user.university));
  }

  const rejectUAdmin = (uAdmin) => {
    dispatch(updateUniversityAdminStatus({ id: uAdmin._id, status: "rejected" }))
      .then(() => getUniversityAdminsByUniversityId(user.university));
  }

  return (
    <div className="flex w-full gap-1">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2 w-full">
          {
            adminDetails.map((item, index) => {
              if (item.status === "pending")
                return (
                  <div key={index} className="bg-white rounded shadow-md">
                    <div className="flex w-full">
                      <div className="w-1/2 p-2 flex flex-col">
                        <div className="flex items-center w-full gap-2">
                          <img className="rounded-full w-20 h-20" src={item.profilePhoto} alt="" />
                          <div>
                            <h2 className="text-xl font-bold">{item.name}</h2>
                            <p className="text-sm">{item.email}</p>
                          </div>
                        </div>
                        <p className="align-center text-center w-full p-1 mt-2 border-x border-t font-semibold bg-gray-200">Full Details</p>
                        <table className="w-full h-fit p-2 rounded-md">
                          <tbody>
                            <tr>
                              <td className="align-center h-4 w-1/3 p-1 border font-semibold text-slate-500">Name: </td>
                              <td className="align-center h-4 p-1 border">{item.name}</td>
                            </tr>
                            <tr>
                              <td className="align-center h-4 w-1/3 p-1 border font-semibold text-slate-500">Enrollment: </td>
                              <td className="align-center h-4 p-1 border">{item.enrollment}</td>
                            </tr>
                            <tr>
                              <td className="align-center h-4 w-1/3 p-1 border font-semibold text-slate-500">Email: </td>
                              <td className="align-center h-4 p-1 border">{item.email}</td>
                            </tr>
                            <tr>
                              <td className="align-center h-4 w-1/3 p-1 border font-semibold text-slate-500">Gender: </td>
                              <td className="align-center h-4 p-1 border">{item.gender}</td>
                            </tr>
                            <tr>
                              <td className="align-center h-4 w-1/3 p-1 border font-semibold text-slate-500">Work Email: </td>
                              <td className="align-center h-4 p-1 border">{item.workEmail}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="w-1/2 flex flex-col gap-2 bg-slate-50 p-2">
                        <h3 className="text-xl font-semibold text-center mb-2">ID Card</h3>
                        <div className="flex h-full gap-2 justify-center items-center">
                          <img className="w-1/2" src={item.idCardFront} alt="id card front" />
                          <img className="w-1/2" src={item.idCardBack} alt="id card back" />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="flex w-1/2 items-center my-2 justify-center">
                        <button onClick={() => verifyUAdmin(item)} className="border-t border-l border-b border-r border-r-accent-gray rounded-l-lg border-accent-green active:scale-95 w-full text-center py-2 font-semibold text-sm hover:bg-accent-green text-accent-green hover:text-white shadow-sm">Accept</button>
                        <button onClick={() => rejectUAdmin(item)} className="border-t border-r border-b border-l border-l-gray-300 rounded-r-lg border-accent-red active:scale-95 w-full text-center py-2 font-semibold text-sm hover:bg-accent-red text-accent-red hover:text-white shadow-sm">REJECT</button>
                      </div>
                    </div>
                  </div>
                )
            })
          }
        </div>
        <div className="flex flex-col h-full mr-1 p-2 px-5 bg-white border rounded-md shadow-md">
          <h1 className="text-xl font-semibold w-full text-center my-2">Assign New University Admin</h1>
          <form className='flex flex-col items-center justify-center w-full' onSubmit={handleUAdminSignup}>
            <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='Name' name='name' value={uAdminData.name} type='text' onChange={handleUAdminData} required />
            <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='E-mail' name='email' value={uAdminData.email} type='email' onChange={handleUAdminData} required />
            <select className='w-full h-12 p-2 my-3 bg-white rounded-md border-1 border-accent-gray' placeholder='Gender' name='gender' value={uAdminData.gender} type='text' onChange={handleUAdminData} required >
              <option default value="Select your gender">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <div className='w-full my-3'>
              <label htmlFor='profilePhoto' className='text-black text-start'>Profile Photo:</label>
              <input className='w-full h-12 p-2 rounded-md border-1 border-accent-gray' placeholder='Profile Photo' name='profilePhoto' accept='image/*' type='file' onChange={(e) => setProfilePhoto(e.target.files[0])} />
            </div>
            <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='Password' name='password' value={uAdminData.password} type='password' onChange={handleUAdminData} required />
            <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='Confirm Password' name='confirmPassword' value={uAdminData.confirmPassword} type='password' onChange={handleUAdminData} required />
            <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='Work Email' name='workEmail' value={uAdminData.workEmail} type='email' onChange={handleUAdminData} />
            <div className='w-full my-3'>
              <label htmlFor='idCardFront' className='text-black text-start'>ID Card Front:</label>
              <input className='w-full h-12 p-2 rounded-md border-1 border-accent-gray' name='idCardFront' accept='image/*' type='file' onChange={(e) => setIdCardFront(e.target.files[0])} required />
            </div>
            <div className='w-full my-3'>
              <label htmlFor='idCardBack' className='text-black text-start'>ID Card Back:</label>
              <input className='w-full h-12 p-2 rounded-md border-1 border-accent-gray' name='idCardBack' accept='image/*' type='file' onChange={(e) => setIdCardBack(e.target.files[0])} required />
            </div>
            <input className='w-full h-12 p-2 my-3 rounded-md border-1 border-accent-gray' placeholder='Enrollment Number' name='enrollment' value={uAdminData.enrollment} type='text' onChange={handleUAdminData} required />

            <div className='flex items-center justify-center w-full mt-2 text-black'>
              <button type='submit' className='w-full p-2 my-3 text-center rounded-md text-background bg-accent-indigo hover:bg-accent-indigo1'>SIGN UP</button>
            </div>
          </form>
        </div>
      </div>
      {currentAdmins.length === 0 ? (
        <div className="shrink-0 h-full w-1/5 flex flex-col justify-center items-center text-center">
          <h1 className="w-fit">Assigned admins appear here!</h1>
          <h2 className="w-fit">No admins exist yet</h2>
        </div>
      ) : (
        <div className="flex flex-col w-1/4 overflow-y-auto">
          <p className="text-lg font-semibold">Currently active University Admins:</p>
          {currentAdmins.map((item, index) => {
            return (
              <div
                key={index}
                className="border mb-2 items-center rounded-md shadow-md bg-white hover:bg-blue-100 hover:scale-95 cursor-pointer p-3 flex justify-between w-full"
              >
                <img
                  src={item.profilePhoto}
                  className="rounded-full w-20 h-20 border"
                  alt=""
                />
                <div className="h-full w-full justify-center flex flex-col m-2">
                  <h1 className="font-semibold text-xl">{item.name}</h1>
                  <p>{item.email}</p>
                </div>
                <div className="mx-auto">
                  <FontAwesomeIcon
                    icon="fa-solid fa-chevron-right"
                    className="hover:translate-x-2"
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AssignAdmin;
