import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProjectById, updateProjectStatus } from "../../redux/actions/projectActions";
import Loading from "../universal/Loading";

function UploadRequest() {
    const { projectId } = useParams();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const studentUploadReq = useSelector((state) => state.project.selectedProject);
    const loadingProject = useSelector((state) => state.project.loading);
    const errProject = useSelector((state) => state.project.err);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        dispatch(getProjectById(projectId));
    }, [dispatch, projectId]);

    const verifyProject = async (e) => {
        e.preventDefault();
        setLoading(true);
        dispatch(updateProjectStatus({ id: studentUploadReq._id, status: "verified", verifiedBy: user._id, verifiedByType: user.role }))
            .then(() => dispatch(getProjectById(projectId)).then(() => setLoading(false)));
    };

    const rejectProject = async (e) => {
        e.preventDefault();
        setLoading(true);
        dispatch(updateProjectStatus({ id: studentUploadReq._id, status: "rejected", verifiedBy: user._id, verifiedByType: user.role }))
            .then(() => dispatch(getProjectById(projectId)).then(() => setLoading(false)));
    };

    return (
        <div className="w-full">
            <div className="w-full border-2 bg-white rounded-md shadow-md">
                {
                    loadingProject ? <div className="flex justify-center items-center">
                        <FontAwesomeIcon icon="spinner" className="text-4xl text-blue-500 animate-spin" />
                    </div> : errProject ? <div className="flex justify-center items-center">
                        Error Occured &nbsp;
                        <FontAwesomeIcon icon="exclamation-circle" className="text-4xl text-red-500" />
                    </div> : studentUploadReq && (
                        <>
                            <div className="flex justify-between items-center w-full rounded-t-md bg-accent-indigo text-white text-center p-2">
                                <h1 className="text-3xl text-center w-full font-semibold">{studentUploadReq.title}</h1>
                            </div>
                            <div className="flex w-full">
                                <img src={studentUploadReq.coverPhoto ? studentUploadReq.coverPhoto : "/images/project-cover-photo-default.jpeg"} alt="" className="w-2/3 h-96 object-cover" />
                                <div className="w-1/2 p-2 flex flex-col">
                                    <div className="flex items-center w-full gap-2">
                                        <img className="rounded-full w-20" src={studentUploadReq.owner.profilePhoto} alt="" />
                                        <div>
                                            <h2 className="text-xl font-bold">{studentUploadReq.owner.name}</h2>
                                            <p className="text-sm">{studentUploadReq.owner.email}</p>
                                            <p className="text-sm">{studentUploadReq.owner.university.name}</p>
                                        </div>
                                    </div>
                                    <p className="align-center text-center w-full p-1 mt-2 border-x border-t font-semibold bg-gray-200">Full Details</p>
                                    <table className="w-full h-fit p-2 rounded-md">
                                        <tr>
                                            <td className="align-center h-4 w-1/3 p-1 border font-semibold text-slate-500">Name: </td>
                                            <td className="align-center h-4 p-1 border">{studentUploadReq.owner.name}</td>
                                        </tr>
                                        <tr>
                                            <td className="align-center h-4 w-1/3 p-1 border font-semibold text-slate-500">Enrollment: </td>
                                            <td className="align-center h-4 p-1 border">{studentUploadReq.owner.enrollment}</td>
                                        </tr>
                                        <tr>
                                            <td className="align-center h-4 w-1/3 p-1 border font-semibold text-slate-500">Email: </td>
                                            <td className="align-center h-4 p-1 border">{studentUploadReq.owner.email}</td>
                                        </tr>
                                        <tr>
                                            <td className="align-center h-4 w-1/3 p-1 border font-semibold text-slate-500">Gender: </td>
                                            <td className="align-center h-4 p-1 border">{studentUploadReq.owner.gender}</td>
                                        </tr>
                                        <tr>
                                            <td className="align-center h-4 w-1/3 p-1 border font-semibold text-slate-500">Work Email: </td>
                                            <td className="align-center h-4 p-1 border">{studentUploadReq.owner.workEmail}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-center w-full p-2 mt-2 border-x border-t bg-gray-200 text-accent-indigo">PROJECT DETAILS</h2>
                                <div className="p-2 w-full">
                                    <h3 className="text-2xl font-bold w-1/3 mt-2 border-b-4">Description:</h3>
                                    <p className="text-base p-2">{studentUploadReq.description}</p>
                                    {
                                        studentUploadReq.methodology && (
                                            <>
                                                <h3 className="text-2xl font-bold w-1/3 mt-2 border-b-4">Methodology:</h3>
                                                <p className="text-base p-2">{studentUploadReq.methodology}</p>
                                            </>
                                        )
                                    }
                                    {
                                        studentUploadReq.outcomes && (
                                            <>
                                                <h3 className="text-2xl font-bold w-1/3 mt-2 border-b-4">Outcomes:</h3>
                                                <p className="text-base p-2">{studentUploadReq.outcomes}</p>
                                            </>
                                        )
                                    }
                                    {
                                        studentUploadReq.report && (
                                            <>
                                                <h3 className="text-2xl font-bold w-1/3 mt-2 border-b-4">Report:</h3>
                                                <a href={studentUploadReq.report}><FontAwesomeIcon icon="fa-solid fa-download" /></a>
                                            </>
                                        )
                                    }
                                    {
                                        studentUploadReq.conclusion && (
                                            <>
                                                <h3 className="text-2xl font-bold w-1/3 mt-2 border-b-4">Conclusion:</h3>
                                                <p className="text-base p-2">{studentUploadReq.conclusion}</p>
                                            </>
                                        )
                                    }
                                    <h3 className="text-2xl font-bold w-1/3 mt-2 border-b-4">Files:</h3>
                                    <div className="w-full overflow-hidden rounded-xl border mt-2">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="flex w-full justify-between items-center">
                                                    <th className="p-2 w-1/2 text-semibold border bg-gray-200">File Name</th>
                                                    <th className="p-2 w-1/2 text-semibold border bg-gray-200">Download</th>
                                                </tr>
                                            </thead>
                                            <tdata>
                                                {
                                                    studentUploadReq.files.map((item, index) => {
                                                        return (
                                                            <tr key={index} className="flex w-full justify-between items-center">
                                                                <td className="p-2 w-1/2 border">File {index + 1}</td>
                                                                <td className="p-2 w-1/2 border cursor-pointer"><a href={item}><FontAwesomeIcon icon="fa-solid fa-download" /></a></td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tdata>
                                        </table>
                                    </div>
                                </div>
                                {
                                    studentUploadReq.status === "pending" && (
                                        <div className="flex justify-center mt-3 w-full ">
                                            <button className="  active:scale-95 w-1/2 m-2 px-4 py-2 font-semibold text-sm bg-green-500 hover:bg-green-600 text-white rounded-md shadow-sm" onClick={(e) => verifyProject(e)}>
                                                Accept
                                            </button>
                                            <button className=" active:scale-95 w-1/2 m-2 px-4 py-2 font-semibold text-sm bg-slate-400 hover:bg-red-500 text-white rounded-md shadow-sm" onClick={(e) => rejectProject(e)}>
                                                Reject
                                            </button>
                                        </div>
                                    )
                                }
                                {
                                    studentUploadReq.status === "verified" && (
                                        <div className="w-full flex justify-center items-center">
                                            <button className="w-1/2 m-2 px-4 py-2 font-semibold text-sm hover:bg-accent-green hover:text-white text-accent-green border-2 border-accent-green rounded-md shadow-sm" >
                                                <FontAwesomeIcon icon="fa-check" className="mx-2" />
                                                Accepted
                                            </button>
                                        </div>
                                    )
                                }
                                {
                                    studentUploadReq.status === "rejected" && (
                                        <div className="w-full flex justify-center items-center">
                                            <button className="w-1/2 m-2 px-4 py-2 font-semibold text-sm hover:bg-accent-red hover:text-white text-accent-red border-2 border-accent-red rounded-md shadow-sm" >
                                                <FontAwesomeIcon icon="fa-x" className="mx-2" />
                                                Rejected
                                            </button>
                                        </div>
                                    )
                                }
                            </div>

                            {/* 
                            <div className="w-full">
                                <div className="flex flex-wrap justify-between w-full">
                                    <div className="flex flex-col w-full justify-start">
                                        <div className="flex gap-2">

                                            <div className="w-2/3">
                                                {
                                                    user.role === "SPOC" && studentUploadReq.status === "pending" ?
                                                        (<h3 className="m-2 font-semibold">Request Details:</h3>) :
                                                        (<h3 className="m-2 font-semibold">Project Details:</h3>)
                                                }
                                                <img
                                                    className="border w-full mx-2 border-black"
                                                    src={studentUploadReq.coverPhoto}
                                                    alt="N/A"
                                                />
                                            </div>
                                            <div className="w-1/3">
                                                <h3 className="m-2 font-semibold">Student Details:</h3>
                                                <div className="flex flex-col h-fit border border-black m-2 rounded-sm">

                                                    <ul className=" p-2">
                                                        <li className="p-2 m-1">Course: {studentUploadReq.owner.course}</li>
                                                        <li className="p-2 m-1">Enrollment Number: {studentUploadReq.owner.enrollment}</li>
                                                        <li className="p-2 m-1">Gender: {studentUploadReq.owner.gender}</li>
                                                        <li className="p-2 m-1">E-mail: {studentUploadReq.owner.email}</li>
                                                        <li className="m-1 p-2">Work E-mail: {studentUploadReq.owner.workEmail}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            // studentUploadReq.tech===true?
                                            // (
                                            //     <div className="m-2">
                                            //         <h1 className="text-3xl font-semibold text-center w-full">{studentUploadReq.title}</h1>
                                            //         <p className="font-semibold text-2xl">Description:</p>
                                            //         <p className="text-xl p-2">{studentUploadReq.description}</p>
                                            //         <p className="font-semibold text-2xl">Work Flow:</p>
                                            //         <p className="text-xl p-2">{studentUploadReq.workFlow}</p>
                                            //         <p className="font-semibold text-2xl">Tech Stack:</p>
                                            //         <p className="text-xl p-2">{studentUploadReq.techStack}</p>
                                            //         <p className="font-semibold text-2xl">Methodology:</p>
                                            //         <p className="text-xl p-2">{studentUploadReq.methodology}</p>
                                            //         <p className="font-semibold text-2xl">Install Instructions:</p>
                                            //         <p className="text-xl p-2">{studentUploadReq.installInstructions}</p>
                                            //         <p className="font-semibold text-2xl">Conclusion:</p>
                                            //         <p className="text-xl p-2">{studentUploadReq.conclusion}</p>
                                            //         <p className="font-semibold text-2xl">Collaboration Guidelines:</p>
                                            //         <p className="text-xl p-2">{studentUploadReq.collabGuidelines}</p>

                                            //         <div>
                                            //             <div className="flex gap-1 items-center">
                                            //                 <FontAwesomeIcon icon="fa-solid fa-paperclip"/>
                                            //                 <h3 className="font-semibold text-2xl">Attachments:</h3>
                                            //             </div>

                                            //             <div className="flex flex-wrap gap-1 items-center justify-center">

                                            //                {studentUploadReq.files.map((item,index)=>{
                                            //                        return(
                                            //                         <div key={index} className="rounded-md p-3 flex w-fit bg-slate-200 justify-between border border-1 shadow-sm">
                                            //                             <p className="mx-3">{item.fileName}</p>
                                            //                             <a href={item.link}><FontAwesomeIcon icon="fa-solid fa-download" /></a>
                                            //                         </div>
                                            //                        )
                                            //                 })}

                                            //             </div>

                                            //         </div>

                                            //         <div className="flex my-3 justify-between border border-1 rounded-md shadow-sm p-3 w-fit bg-slate-200">
                                            //             <p className="mx-3">Readme.md</p>
                                            //             <a href={studentUploadReq.readmefile}><FontAwesomeIcon icon="fa-solid fa-eye"/></a>
                                            //         </div>


                                            //     </div>
                                            // ):
                                            (
                                                <div className="m-2">
                                                    <h2 className="font-semibold">{studentUploadReq.title}</h2>
                                                    <p className="font-semibold">Description:</p>
                                                    <p>{studentUploadReq.description}</p>
                                                    <p className="font-semibold">Methodology:</p>
                                                    <p>{studentUploadReq.methodology}</p>
                                                    <p className="font-semibold">Outcomes:</p>
                                                    <p>{studentUploadReq.outcomes}</p>
                                                    <p className="font-semibold">Report:</p>
                                                    <p>{studentUploadReq.report}</p>
                                                    <p className="font-semibold">Conclusion:</p>
                                                    <p>{studentUploadReq.conclusion}</p>

                                                    <div>
                                                        <h3 className="font-semibold">Attachments:</h3>

                                                        <div className="flex flex-wrap gap-1 items-center justify-center">

                                                            {studentUploadReq.files.map((item, index) => {
                                                                return (
                                                                    <div key={index} className="rounded-md p-3 flex w-fit bg-slate-300 justify-between border border-1 shadow-sm">
                                                                        <p className="mx-3">{item.fileName}</p>
                                                                        <a href={item.link}><FontAwesomeIcon icon="fa-solid fa-download" className="pr-3" /></a>
                                                                    </div>
                                                                )
                                                            })}

                                                        </div>

                                                    </div>


                                                </div>
                                            )
                                        }
                                    </div>

                                </div>

                                {
                                    user.role === "SPOC" && (
                                        studentUploadReq.status === "pending" ? (
                                            <div className="flex justify-center">
                                                <button className="border border-black active:scale-95 w-fit m-2 px-4 py-2 font-semibold text-sm bg-accent-green hover:bg-lime-600 text-white rounded-md shadow-sm" onClick={verifyProject}>
                                                    Accept
                                                </button>
                                                <button className="border border-black active:scale-95 w-fit m-2 px-4 py-2 font-semibold text-sm bg-accent-red hover:bg-red-600 text-white rounded-md shadow-sm" onClick={rejectProject}>
                                                    Reject
                                                </button>
                                            </div>
                                        ) : (
                                            studentUploadReq.status === "verified" ? (
                                                <div className="flex justify-center items-center">
                                                    <button className="border-2 active:scale-95 w-fit m-2 px-4 py-2 font-semibold text-sm border-accent-green text-accent-green rounded-md shadow-sm" disabled>
                                                        Accepted
                                                    </button>
                                                    <p>Verified by: {studentUploadReq.verifiedBy?.name}</p>
                                                </div>
                                            ) : (
                                                <div className="flex justify-center items-center">
                                                    <button className="border-2 border-accent-red text-accent-red active:scale-95 w-fit m-2 px-4 py-2 font-semibold text-sm rounded-md shadow-sm" disabled>
                                                        Rejected
                                                    </button>
                                                    <p>Rejected by: {studentUploadReq.verifiedBy?.name}</p>
                                                </div>
                                            )
                                        )
                                    )
                                }
                                {studentUploadReq.status === "verified" && (
                                    <div className="flex items-center gap-1 mt-8 ">
                                        <button className="border p-2 hover:bg-red-200 rounded-bl-md w-1/4  flex justify-center text-2xl text-accent-red">
                                            <FontAwesomeIcon icon=" fa-heart" className="p-1" />
                                            Like
                                        </button>
                                        <button className="border hover:bg-stone-200 p-2 w-1/4 text-2xl text-accent-gray">
                                            <FontAwesomeIcon icon=" fa-comment" className="mx-2" />
                                            Comment
                                        </button>
                                        <button className="border p-2 w-1/4 hover:bg-green-200 text-2xl text-accent-gray">
                                            <FontAwesomeIcon icon=" fa-solid fa-check" className="mx-2" />
                                            Review
                                        </button>
                                        <button className="border p-2 rounded-br-md hover:bg-blue-200 w-1/4 text-2xl text-sky-700">
                                            <FontAwesomeIcon icon=" fa-share" className="mx-2" />
                                            Share
                                        </button>
                                    </div>
                                )}
                            </div> */}
                        </>
                    )
                }
                {
                    loading && <Loading />
                }
            </div>
        </div>

    )
}

export default UploadRequest;