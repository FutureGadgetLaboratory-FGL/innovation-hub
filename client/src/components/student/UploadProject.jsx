import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadFile } from "../../redux/api";
import { createProject } from "../../redux/actions/projectActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "../universal/Loading";

const UploadProject = () => {
	const dispatch = useDispatch();
	const [technical, setTechnical] = React.useState(true);
	const [techProjectData, setTechProjectData] = React.useState({});
	const [nonTechProjectData, setNonTechProjectData] = React.useState({});
	const [report, setReport] = React.useState(null);
	const [coverPhoto, setCoverPhoto] = React.useState(null);
	const [files, setFiles] = React.useState([]);
	const [uploaded, setUploaded] = React.useState(false);
	const [loading, setLoading] = React.useState(false);

	const user = useSelector((state) => state.user.user);

	const changeTechFormData = (e) => {
		setTechProjectData({ ...techProjectData, [e.target.name]: e.target.value });
	}

	const changeNonTechFormData = (e) => {
		setNonTechProjectData({ ...nonTechProjectData, [e.target.name]: e.target.value });
	}

	const submitNonTechProject = async (e) => {
		e.preventDefault();
		if (uploaded) return;
		setLoading(true);
		let reportUrl = null, coverPhotoUrl = null;
		if (report) {
			reportUrl = dispatch(await uploadFile(report)).url;
		}
		if (coverPhoto) {
			coverPhotoUrl = dispatch(await uploadImage(coverPhoto)).url;
		}
		let filesUrl = [];
		for (let i = 0; i < files.length; i++) {
			filesUrl.push(dispatch(await uploadFile(files[i])).url);
		}
		const project = {
			...nonTechProjectData,
			report: reportUrl,
			coverPhoto: coverPhotoUrl,
			files: filesUrl,
			university: user.university,
			owner: user._id,
		};
		dispatch(createProject(project))
			.then(() => {
				setLoading(false);
				console.log("Project successfully created.");
				setUploaded(true);
			})
	}

	return (
		<>
			{
				loading && (
					<Loading z={loading ? 100 : -1} />
				)
			}
			{
				user.role === "Student" ?
					(
						<div className="mt-5">
							<div class="mx-auto bg-white p-6 rounded-xl mb-5 shadow-[rgba(0,0,0,0.1)_0px_15px_20px_0px,rgba(0,0,0,0.04)_0px_10px_10px_-5px] w-[70%] flex flex-col justify-center items-center">
								<div className="flex justify-between w-[80%]">
									<button className={`rounded m-2 ${technical ? "bg-primary-light hover:bg-primary" : "bg-gray-200 hover:bg-gray-300"} w-full text-2xl font-bold mb-3 border-b-2 p-2`} onClick={() => setTechnical(true)}>Technical Project</button>
									<button className={`rounded m-2 ${technical ? "bg-gray-200 hover:bg-gray-300" : "bg-primary-light hover:bg-primary"} w-full text-2xl font-bold mb-3 border-b-2 p-2`} onClick={() => setTechnical(false)}>Non-Technical Project</button>
								</div>
								{!technical ? (
									<form onSubmit={submitNonTechProject} className="w-[80%] p-2">
										<div class="mb-4">
											<label for="title" class="block text-gray-700 font-bold mb-2 ">
												Title:
											</label>
											<input type="text" id="title" name="title" class="w-full p-2 border rounded" required onChange={changeNonTechFormData} />
										</div>
										<div className="flex gap-3">
											<div class="mb-4 w-1/2">
												<label for="description" class="block text-gray-700 font-bold mb-2">
													Description:
												</label>
												<textarea
													type="text"
													id="description"
													name="description"
													class="w-full p-2 border rounded"
													required
													onChange={changeNonTechFormData}
												/>
											</div>
											<div class="mb-4 w-1/2">
												<label for="methodology" class="block text-gray-700 font-bold mb-2">
													Methodology:
												</label>
												<textarea
													type="text"
													id="methodology"
													name="methodology"
													class="w-full p-2 border rounded"
													onChange={changeNonTechFormData}
												/>
											</div>
										</div>

										<div class="mb-4">
											<label for="outcomes" class="block text-gray-700 font-bold mb-2">
												Outcomes:
											</label>
											<textarea type="text" id="outcomes" name="outcomes" class="w-full p-2 border rounded" onChange={changeNonTechFormData} />
										</div>
										<div class="mb-4">
											<label for="report" class="block text-gray-700 font-bold mb-2">
												Report:
											</label>
											<input
												type="file"
												id="report"
												name="report"
												accept=".pdf,.docx"
												class="w-full p-2 border rounded"
												onChange={(e) => setReport(e.target.files[0])}
											/>
										</div>
										<div class="mb-4">
											<label for="cover-photo" class="block text-gray-700 font-bold mb-2">
												Cover Photo:
											</label>
											<input
												type="file"
												id="cover-photo"
												name="cover_photo"
												accept="image/*"
												class="w-full p-2 border rounded"
												onChange={(e) => setCoverPhoto(e.target.files[0])}
											/>
										</div>
										<div class="mb-4">
											<label for="files" class="block text-gray-700 font-bold mb-2">
												Files (Multiple):
											</label>
											<input
												type="file"
												id="files"
												name="files[]"
												multiple
												class="w-full p-2 border rounded"
												onChange={(e) => setFiles(e.target.files)}
											/>
										</div>
										{/* <div class="mb-4">
						<label for="status" class="block text-gray-700 font-bold mb-2">
							Status:
						</label>
						<select id="status" name="status" class="w-full p-2 border rounded" required>
							<option value="pending">Pending</option>
							<option value="verified">Verified</option>
							<option value="rejected">Rejected</option>
						</select>
					</div> */}
										<div class="mb-4 flex justify-center">
											{
												uploaded ? (
													<button onClick={() => { }} className="flex justify-center gap-1 rounded p-2 border-2 shadow border-accent-green text-accent-green hover:bg-accent-green hover:text-white">
														<FontAwesomeIcon icon=" fa-check" className="p-1" />
														Uploaded
													</button>
												) : (
													<button
														type="submit"
														class="bg-accent-green hover:bg-lime-400 text-white font-bold py-2 px-4 rounded"
													>
														Submit
													</button>
												)
											}

										</div>
									</form>
								) : (
									<>
										<form action="#" method="POST" enctype="multipart/form-data" className="w-[80%] p-2">
											<div class="mb-4">
												<label for="title" class="block text-gray-700 font-bold mb-2 ">
													Title:
												</label>
												<input type="text" id="title" name="title" class="w-full p-2 border rounded" required />
											</div>
											<div className="flex gap-3">
												<div class="mb-4 w-1/2">
													<label for="description" class="block text-gray-700 font-bold mb-2">
														Description:
													</label>
													<textarea
														type="text"
														id="description"
														name="description"
														className="w-full p-1 border rounded"
														placeholder="Explain your project in brief"
														required
													/>
												</div>
												<div class="mb-4 w-1/2">
													<label for="structure" class="block text-gray-700 font-bold mb-2">
														Workflow:
													</label>
													<textarea
														type="text"
														id="structure"
														name="structure"
														className="w-full p-1 border rounded"
														placeholder="Explain the workflow of your project"
														required
													/>
												</div>
											</div>

											<div class="mb-4">
												<label for="outcomes" class="block text-gray-700 font-bold mb-2">
													Tech Stack:
												</label>
												<textarea type="text" id="outcomes" name="outcomes" placeholder="Provide the tech stack" className="w-full p-1 border rounded" required />
											</div>
											<div class="mb-4">
												<label for="outcomes" class="block text-gray-700 font-bold mb-2">
													Methodology:
												</label>
												<textarea type="text" id="outcomes" name="outcomes" placeholder="Provide the methodology" className="w-full p-1 border rounded" required />
											</div>
											<div class="mb-4">
												<label for="outcomes" class="block text-gray-700 font-bold mb-2">
													Install Instructions:
												</label>
												<textarea type="text" id="outcomes" name="outcomes" placeholder="Provide the Install Instructions" className="w-full p-1 border rounded" required />
											</div>
											<div class="mb-4">
												<label for="outcomes" class="block text-gray-700 font-bold mb-2">
													Conclusion:
												</label>
												<textarea type="text" id="outcomes" name="outcomes" placeholder="Provide the conclusion" className="w-full p-1 border rounded" required />
											</div>
											<div class="mb-4">
												<label for="outcomes" class="block text-gray-700 font-bold mb-2">
													Collaboration Guidelines:
												</label>
												<textarea type="text" id="outcomes" name="outcomes" placeholder="Provide the collaboration guidelines" className="w-full p-1 border rounded" required />
											</div>
											<div class="mb-4">
												<label for="cover-photo" class="block text-gray-700 font-bold mb-2">
													Upload README.md:
												</label>
												<div className="flex gap-2">
													<input
														type="file"
														id="cover-photo"
														name="cover_photo"
														accept="image/*"
														class="w-full p-2 border rounded"
														required
													/>
													<button className="rounded p-2 border shadow bg-primary-light text-white hover:bg-primary">Auto Generate</button>
												</div>
											</div>
											<div class="mb-4">
												<label for="cover-photo" class="block text-gray-700 font-bold mb-2">
													Cover Photo:
												</label>
												<input
													type="file"
													id="cover-photo"
													name="cover_photo"
													accept="image/*"
													class="w-full p-2 border rounded"
													required
												/>
											</div>
											<div class="mb-4">
												<label for="files" class="block text-gray-700 font-bold mb-2">
													Files (Multiple):
												</label>
												<input
													type="file"
													id="files"
													name="files[]"
													multiple
													class="w-full p-2 border rounded"
													required
												/>
											</div>
											<div class="mb-4">
												<label for="report" class="block text-gray-700 font-bold mb-2">
													Report:
												</label>
												<input
													type="file"
													id="report"
													name="report"
													accept=".pdf,.docx"
													class="w-full p-2 border rounded"
													required
												/>
											</div>
											{/* <div class="mb-4">
						<label for="status" class="block text-gray-700 font-bold mb-2">
							Status:
						</label>
						<select id="status" name="status" class="w-full p-2 border rounded" required>
							<option value="pending">Pending</option>
							<option value="verified">Verified</option>
							<option value="rejected">Rejected</option>
						</select>
					</div> */}
											<div class="mb-4 flex justify-center">
												<button
													type="submit"
													class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
												>
													Submit
												</button>
											</div>
										</form>
									</>
								)}
							</div>
						</div>
					) : (
						<div className="mt-5">
							<div class="mx-auto bg-white p-6 rounded-xl mb-5 shadow-[rgba(0,0,0,0.1)_0px_15px_20px_0px,rgba(0,0,0,0.04)_0px_10px_10px_-5px] w-[70%] flex flex-col justify-center items-center">
								<h2 className="text-2xl font-bold mb-3 border-b-2 p-2">Upload Project</h2>
								<form action="#" method="POST" enctype="multipart/form-data" className="w-[80%] p-2">
									<div class="mb-4">
										<label for="title" class="block text-gray-700 font-bold mb-2 ">
											Title:
										</label>
										<input type="text" id="title" name="title" class="w-full p-2 border rounded" required />
									</div>
									<div className="flex gap-3">
										<div class="mb-4 w-1/2">
											<label for="description" class="block text-gray-700 font-bold mb-2">
												Description:
											</label>
											<textarea
												type="text"
												id="description"
												name="description"
												class="w-full p-2 border rounded"
												required
											/>
										</div>
										<div class="mb-4 w-1/2">
											<label for="methodology" class="block text-gray-700 font-bold mb-2">
												Methodology:
											</label>
											<textarea
												type="text"
												id="methodology"
												name="methodology"
												class="w-full p-2 border rounded"
												required
											/>
										</div>
									</div>

									<div class="mb-4">
										<label for="outcomes" class="block text-gray-700 font-bold mb-2">
											Outcomes:
										</label>
										<textarea type="text" id="outcomes" name="outcomes" class="w-full p-2 border rounded" required />
									</div>
									<div class="mb-4">
										<label for="report" class="block text-gray-700 font-bold mb-2">
											Report:
										</label>
										<input
											type="file"
											id="report"
											name="report"
											accept=".pdf,.docx"
											class="w-full p-2 border rounded"
											required
										/>
									</div>
									<div class="mb-4">
										<label for="cover-photo" class="block text-gray-700 font-bold mb-2">
											Cover Photo:
										</label>
										<input
											type="file"
											id="cover-photo"
											name="cover_photo"
											accept="image/*"
											class="w-full p-2 border rounded"
											required
										/>
									</div>
									<div class="mb-4">
										<label for="files" class="block text-gray-700 font-bold mb-2">
											Files (Multiple):
										</label>
										<input
											type="file"
											id="files"
											name="files[]"
											multiple
											class="w-full p-2 border rounded"
											required
										/>
									</div>
									<div class="mb-4">
										<label for="status" class="block text-gray-700 font-bold mb-2">
											Status:
										</label>
										<select id="status" name="status" class="w-full p-2 border rounded" required>
											<option value="pending">Pending</option>
											<option value="verified">Verified</option>
											<option value="rejected">Rejected</option>
										</select>
									</div>
									<div class="mb-4 flex justify-center">
										<button
											type="submit"
											class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
										>
											Submit
										</button>
									</div>
								</form>
							</div>
						</div>
					)
			}
		</>
	);
};

export default UploadProject;
