import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSpocs } from "../../redux/actions/spocActions";
import { updateUniversityStatus } from "../../redux/actions/universityActions";
import { updateSpocStatus } from "../../redux/actions/spocActions";

function UnivAndSpocRequests() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const spocReq = useSelector((state) => state.spoc.spocs.filter((item) => item.status === "pending"));
  const loadingSpoc = useSelector((state) => state.spoc.loading);
  const errSpoc = useSelector((state) => state.spoc.err);
  const [editing, setEditing] = useState(new Set());

  useEffect(() => {
    dispatch(getAllSpocs());
  }, [dispatch]);

  const verifySpocAndUniverisity = (spoc) => {
    dispatch(updateUniversityStatus({ id: spoc.university._id, status: "verified", verifiedBy: user._id }));
    dispatch(updateSpocStatus({ id: spoc._id, status: "verified", verifiedBy: user._id }))
      .then(() => dispatch(getAllSpocs()));
  };

  const rejectSpocAndUniverisity = (spoc) => {
    dispatch(updateUniversityStatus({ id: spoc.university._id, status: "rejected", verifiedBy: user._id }));
    dispatch(updateSpocStatus({ id: spoc._id, status: "rejected", verifiedBy: user._id }))
      .then(() => dispatch(getAllSpocs()));
  };

  const handleExpand = (id) => {
    setEditing((editing) => {
      // Copy the set
      editing = new Set(editing);
      if (editing.has(id)) {
        // Already editing, stop editing
        editing.delete(id);
      } else {
        // Not editing, start
        editing.add(id);
      }
      return editing;
    });
  };

  return (
    <div className=" w-full h-full gap-2 overflow-y-auto overflow-x-hidden p-2">
      {
        loadingSpoc && <div className="flex justify-center items-center">
          <FontAwesomeIcon icon="spinner" className="text-4xl text-blue-500 animate-spin" />
        </div>
      }
      {
        errSpoc && <div className="flex justify-center items-center">
          Error Occured &nbsp;
          <FontAwesomeIcon icon="exclamation-circle" className="text-4xl text-red-500" />
        </div>
      }
      {
        spocReq.length === 0 && !loadingSpoc && !errSpoc && <div className="flex justify-center items-center">
          No Pending University Requests
        </div>
      }
      {
        !loadingSpoc && !errSpoc && spocReq.length > 0 && (
          <>
            <div className="flex flex-col w-full gap-4">
              {
                spocReq.map((item, index) => {
                  return (
                    <>
                      <div className="border-2 rounded-md shadow-md bg-white transition-transform ease-in-out duration-1000">
                        <div className="border-b rounded-t-md w-full bg-accent-indigo p-2">
                          <h1 className="text-2xl font-semibold text-center text-white">{item.university.name}</h1>
                        </div>
                        <div
                          key={index}
                          className="w-full flex"
                        >
                          <div className="border-t border-r border-b w-1/3 p-2">
                            <h1 className="text-xl text-accent-indigo w-full bg-gray-200 rounded-md p-1 font-semibold text-center mb-2">University Details</h1>
                            {
                              !editing.has(index) && (
                                <>
                                  <p className="text-sm"><b>Name: </b>{item.university.name}</p>
                                  <p className="text-sm"><b>Address: </b>{item.university.area}, {item.university.city}, {item.university.city}, {item.university.state}, {item.university.country}</p>
                                  <p className="text-sm"><b>Pincode: </b>{item.university.pincode}</p>
                                </>
                              )
                            }
                            {
                              editing.has(index) && (
                                <>
                                  <table className="w-full p-2 rounded-md">
                                    <tr>
                                      <td className="align-center h-4 w-1/3 p-1 border font-semibold text-slate-500">Name: </td>
                                      <td className="align-center h-4 p-1 border">{item.university.name}</td>
                                    </tr>
                                    <tr>
                                      <td className="align-center h-4 w-1/3 p-1 border font-semibold text-slate-500">Area: </td>
                                      <td className="align-center h-4 p-1 border">{item.university.area}</td>
                                    </tr>
                                    <tr>
                                      <td className="align-center h-4 w-1/3 p-1 border font-semibold text-slate-500">City: </td>
                                      <td className="align-center h-4 p-1 border">{item.university.city}</td>
                                    </tr>
                                    <tr>
                                      <td className="align-center h-4 w-1/3 p-1 border font-semibold text-slate-500">State: </td>
                                      <td className="align-center h-4 p-1 border">{item.university.state}</td>
                                    </tr>
                                    <tr>
                                      <td className="align-center h-4 w-1/3 p-1 border font-semibold text-slate-500">Country: </td>
                                      <td className="align-center h-4 p-1 border">{item.university.country}</td>
                                    </tr>
                                    <tr>
                                      <td className="align-center h-4 w-1/3 p-1 border font-semibold text-slate-500">Pincode: </td>
                                      <td className="align-center h-4 p-1 border">{item.university.pincode}</td>
                                    </tr>
                                    <tr>
                                      <td className="align-center h-4 w-1/3 p-1 border font-semibold text-slate-500">University contact email: </td>
                                      <td className="align-center h-4 p-1 border">{item.university.email}</td>
                                    </tr>
                                  </table>
                                </>
                              )
                            }
                          </div>
                          <div className="border-t border-l border-b w-2/3 p-2">
                            <h1 className="text-xl text-accent-indigo w-full bg-gray-200 rounded-md p-1 font-semibold text-center mb-2">SPOC Details</h1>
                            {
                              !editing.has(index) && (
                                <>
                                  <div className="flex items-center w-full gap-2">
                                    <img className="rounded-full w-20" src={item.profilePhoto} alt="" />
                                    <div>
                                      <h2 className="text-xl font-bold">{item.name}</h2>
                                      <p className="text-sm">{item.email}</p>
                                      <p className="text-sm">{item.university.name}</p>
                                    </div>
                                  </div>
                                </>
                              )
                            }
                            {
                              editing.has(index) && (
                                <div className="flex w-full">
                                  <div className="w-1/2 p-2 flex flex-col">
                                    <div className="flex items-center w-full gap-2">
                                      <img className="rounded-full w-20" src={item.profilePhoto} alt="" />
                                      <div>
                                        <h2 className="text-xl font-bold">{item.name}</h2>
                                        <p className="text-sm">{item.email}</p>
                                        <p className="text-sm">{item.university.name}</p>
                                      </div>
                                    </div>
                                    <p className="align-center text-center w-full p-1 mt-2 border-x border-t font-semibold bg-gray-200">Full Details</p>
                                    <table className="w-full h-fit p-2 rounded-md">
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
                                        <td className="align-center h-4 w-1/3 p-1 border font-semibold text-slate-500">University: </td>
                                        <td className="align-center h-4 p-1 border">{item.university.name}</td>
                                      </tr>
                                      <tr>
                                        <td className="align-center h-4 w-1/3 p-1 border font-semibold text-slate-500">Gender: </td>
                                        <td className="align-center h-4 p-1 border">{item.gender}</td>
                                      </tr>
                                      <tr>
                                        <td className="align-center h-4 w-1/3 p-1 border font-semibold text-slate-500">Work Email: </td>
                                        <td className="align-center h-4 p-1 border">{item.workEmail}</td>
                                      </tr>
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
                              )
                            }
                          </div>
                        </div>
                        {
                          editing.has(index) && (
                            <div className="flex justify-center">
                              <div className="flex w-1/2 items-center my-2 justify-center">
                                <button onClick={() => verifySpocAndUniverisity(item)} className="border-t border-l border-b border-r border-r-accent-gray rounded-l-lg border-accent-green active:scale-95 w-full text-center py-2 font-semibold text-sm hover:bg-accent-green text-accent-green hover:text-white shadow-sm">Accept</button>
                                <button onClick={() => rejectSpocAndUniverisity(item)} className="border-t border-r border-b border-l border-l-gray-300 rounded-r-lg border-accent-red active:scale-95 w-full text-center py-2 font-semibold text-sm hover:bg-accent-red text-accent-red hover:text-white shadow-sm">REJECT</button>
                              </div>
                            </div>
                          )
                        }
                        <div className="flex items-center justify-center h-10 w-full border-t rounded-b-md cursor-pointer bg-gray-200 hover:bg-gray-100" onClick={(e) => handleExpand(index)} >
                          <FontAwesomeIcon icon={`fa-solid ${editing.has(index) ? "fa-chevron-up" : "fa-chevron-down"}`} className="text-2xl text-center text-accent-indigo cursor-pointer" />
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div >
          </>
        )
      }
    </div>

  );
}

export default UnivAndSpocRequests;