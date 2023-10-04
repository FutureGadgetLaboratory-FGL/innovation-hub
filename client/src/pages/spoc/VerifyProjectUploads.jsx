import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { getProjectsByUniversityId } from "../../redux/actions/projectActions";
import { useNavigate } from "react-router-dom";

const VerifyProjectUploads = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector(state => state.user.user);
	const projects = useSelector(state => state.project.projects);
	const studentUploadReq = projects.filter(project => project.status === "pending");
	const loadingProjects = useSelector(state => state.project.loading);
	const errProjects = useSelector(state => state.project.err);

	useEffect(() => {
		dispatch(getProjectsByUniversityId(user.university));
	}, [dispatch, user]);

	const openProjectDetails = (project) => {
		navigate('/spoc/upload-requests/' + project._id);
	}

	return (
		<div className="w-full">
			<p className="text-2xl font-semibold pl-5 mb-4 text-slate-600">Verify Student's Projects for Upload</p>
			<div className="p-2 px-4">
				{
					loadingProjects ? <div className="flex justify-center items-center">
						<FontAwesomeIcon icon="spinner" className="text-4xl text-blue-500 animate-spin" />
					</div> : errProjects ? <div className="flex justify-center items-center">
						Error Occured &nbsp;
						<FontAwesomeIcon icon="exclamation-circle" className="text-4xl text-red-500" />
					</div> : studentUploadReq.length > 0 && (
						<table className=" w-full  ">
							<thead className="bg-violet-500">
								<tr>
									<th className="p-2 text-left text-lg font-semibold text-white border w-[5%]">S.No.</th>
									<th className="p-2 text-left text-lg font-semibold text-white border w-[30%]">Student Name</th>
									<th className="p-2 text-left text-lg font-semibold text-white border  w-[20%]">
										Enrollment No.
									</th>
									<th className="p-2 text-left text-lg font-semibold text-white border w-[40%]">Project Title</th>
									<th className="p-2 text-left text-lg font-semibold text-white border w-[5%]">View</th>
								</tr>
							</thead>
							<tbody>
								{studentUploadReq.map((item, index) => {
									return (
										<tr
											key={index}
											className={
												index % 2 === 0 ? "cursor-pointer border-b-2" : "cursor-pointer bg-violet-100 border-b-2"
											}
											onClick={() => openProjectDetails(item)}
										>
											<td className=" text-center p-2 w-[5%]">{index + 1}</td>
											<td className=" text-left p-2 w-[30%]">{item.owner.name}</td>
											<td className=" text-left p-2 w-[20%]">{item.owner.enrollment}</td>
											<td className=" text-left p-2 w-[40%]">{item.title}</td>
											<td className="border-b text-center w-[5%]">
												<FontAwesomeIcon
													icon="fa-solid fa-chevron-right"
													className={`hover:translate-x-1 w-full`}
												/>
											</td>
										</tr>
									);
									return null;
								})}
							</tbody>
						</table>
					)
				}
			</div>
		</div>
	);
};

export default VerifyProjectUploads;
