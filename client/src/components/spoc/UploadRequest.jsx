import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProjectById, updateProjectStatus } from "../../redux/actions/projectActions";

function UploadRequest() {
    const { projectId } = useParams();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const studentUploadReq = useSelector((state) => state.project.selectedProject);
    const loadingProject = useSelector((state) => state.project.loading);
    const errProject = useSelector((state) => state.project.err);

    useEffect(() => {
        dispatch(getProjectById(projectId));
    }, [dispatch, projectId]);

    const verifyProject = async (e) => {
        // e.preventDefault();''
        dispatch(updateProjectStatus({ id: studentUploadReq._id, status: "verified", verifiedBy: user._id, verifiedByType: user.role }))
            .then(() => dispatch(getProjectById(projectId)));
    };

    const rejectProject = async () => {
        dispatch(updateProjectStatus({ id: studentUploadReq._id, status: "rejected", verifiedBy: user._id, verifiedByType: user.role }))
            .then(() => dispatch(getProjectById(projectId)));
    }

    return (
        <div className="w-full">

            <div className="w-full p-2 border-2 min-h-full rounded-md shadow-md cursor-pointer">

                {
                    loadingProject ? <div className="flex justify-center items-center">
                        <FontAwesomeIcon icon="spinner" className="text-4xl text-blue-500 animate-spin" />
                    </div> : errProject ? <div className="flex justify-center items-center">
                        Error Occured &nbsp;
                        <FontAwesomeIcon icon="exclamation-circle" className="text-4xl text-red-500" />
                    </div> : studentUploadReq && (
                        <>
                            <div className="flex justify-between w-full p-2">
                                <div className="flex justify-center items-center gap-1">
                                    <img className="border border-1 rounded-full" src={studentUploadReq.owner.profilePhoto} alt="N/A" />
                                    <h1 className="text-2xl font-semibold m-2 ">{studentUploadReq.owner.name}</h1>
                                </div>
                                <h1 className="m-2 text-xl font-semibold">{studentUploadReq.owner.university}</h1>
                            </div>

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
                            </div>
                        </>
                    )
                }

            </div>
        </div>

    )
}

export default UploadRequest;