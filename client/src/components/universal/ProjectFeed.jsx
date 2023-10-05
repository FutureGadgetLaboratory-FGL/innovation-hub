import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../../redux/actions/projectActions";
import { createCollaboration } from "../../redux/actions/collaborationActions";
function ProjectFeed() {
	const user = useSelector((state) => state.user.user);
	const projectFeed = useSelector((state) => state.project.projects);
	const loadingProjects = useSelector((state) => state.project.loading);
	const errProjects = useSelector((state) => state.project.err);

	const [currI, setCurrI] = useState(null);
	const [collaborationText, setCollaborationText] = useState("");

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllProjects());
	}, [dispatch]);

	const sendCollaborationRequest = (project) => {

		dispatch(createCollaboration({ sender: user._id, project: project._id, message: collaborationText, owner: project.owner }))
			.then(setCurrI(null));
	};

	return (
		<div className=" w-full h-full mt-5">
			<h1 className="mb-4 text-[20px] font-bold">Projects Feed</h1>
			<hr className="w-1/3 mb-3" />
			<div className="flex flex-col gap-3 justify-center items-start w-full">
				{loadingProjects ? (
					<>
						<div className="flex justify-center items-center">
							<FontAwesomeIcon
								icon="spinner"
								className="text-4xl text-blue-500 animate-spin"
							/>
						</div>
					</>
				) : errProjects ? (
					<>
						<div className="flex justify-center items-center">
							Error Occured &nbsp;
							<FontAwesomeIcon
								icon="exclamation-circle"
								className="text-4xl text-red-500"
							/>
						</div>
					</>
				) : (
					projectFeed.map((item, index) => {
						return (
							<div
								key={index}
								className="bg-white overflow-hidden w-full mb-2 rounded-xl shadow-[rgba(0,0,0,0.1)_0px_15px_20px_0px,rgba(0,0,0,0.04)_0px_10px_10px_-5px] flex gap-2"
							>
								<div className="w-1/2 flex overflow-y-auto ">
									<img
										className={`${index === currI ? "w-0" : "w-full"} h-80 object-cover`}
										src={item.coverPhoto ? item.coverPhoto : "../images/project-cover-photo-default.jpeg"}
										alt=""
									/>
									<div className="h-54 object-contain transition ease-in-out delay-500 duration-1000"></div>
									<div
										className={`h-full ${index === currI ? "w-full" : "w-0"
											} flex flex-col justify-evenly overflow-hidden transition ease-in-out delay-100 duration-1000`}
									>
										<h1 className="w-full font-semibold p-2">Send Collaboration Request to your SPOC</h1>
										<textarea
											value={collaborationText}
											onChange={(e) => setCollaborationText(e.target.value)}
											className="border border-black justify-start w-full h-1/2 p-2 whitespace-normal break-words resize-none"
											placeholder="Tell us why you want to collaborate?"
										/>
										<button
											onClick={() => sendCollaborationRequest(item)}
											className="active:scale-95 mt-3 w-fit mb-1 px-4 py-2 font-semibold text-[12px] bg-accent-green hover:bg-lime-600 text-white rounded-md"
										>
											Submit
										</button>
									</div>
								</div>

								<div className="right flex flex-col p-3 gap-3 w-1/2">
									<div className="profile">
										<div className="flex justify-start items-center gap-3">
											<img
												className="rounded-full h-12 w-12 object-cover"
												src={item.owner.profilePhoto ? item.owner.profilePhoto : "../images/profile.png"}
												alt=""
											/>
											<div className="flex flex-col gap-0">
												<h2 className="text-sm font-bold">{item.owner.name}</h2>
												<p className="text-xs font-normal">{item.owner.branch}</p>
												<h3 className="text-[12px] font-normal">{item.university.name}</h3>
											</div>
										</div>
									</div>
									<div className="flex flex-col gap-2">
										<h1 className="text-lg font-semibold">{item.title}</h1>
										<p className="text-sm break-words">{item.description}</p>
									</div>

									<div className="flex items-center gap-4 mt-8 ">
										<button className="bg-transparent flex justify-start text-lg text-accent-red">
											<FontAwesomeIcon icon=" fa-heart" className="p-1" />

											{item.likes.length}
										</button>
										<button className="bg-transparent text-lg text-accent-gray">
											<FontAwesomeIcon icon=" fa-comment" />
										</button>
										<button className="bg-transparent text-lg text-sky-700">
											<FontAwesomeIcon icon=" fa-share" />
										</button>
									</div>
									{user._id && user.role === "Student" && (
										<div className="flex justify-start items-center">
											<button
												onClick={(e) => {
													setCurrI(index);
												}}
												className="active:scale-95 px-4 py-2 font-semibold text-[12px] bg-blue-500 hover:bg-blue-600 text-white rounded-md"
											>
												Request to Collaborate
											</button>
										</div>
									)}
								</div>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
}

export default ProjectFeed;
