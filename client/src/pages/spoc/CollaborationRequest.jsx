function CollaborationRequest() {
	const studentCollabReq = [
		{
			sender: {
				name: "User 1",
				enrollment: "001100",
				gender: "M",
				profilePhoto: "https://picsum.photos/64",
				email: "abc@gmail.com",
				university: "Amity University",
				course: "CSE",
				workEmail: "abc@outlook.com",
			},
			project: {
				coverPhoto: "https://picsum.photos/1080/600",
				title: "Title 1",
				description: "This is the description of the project",
			},
			message: "I want to collab please consider my request.",
			status: "",
		},
		{
			sender: {
				name: "User 1",
				enrollment: "001100",
				gender: "M",
				profilePhoto: "https://picsum.photos/64",
				email: "abc@gmail.com",
				university: "Amity University",
				course: "CSE",
				workEmail: "abc@outlook.com",
			},
			project: {
				coverPhoto: "https://picsum.photos/1080/600",
				title: "Title 1",
				description: "This is the description of the project",
			},
			message: "I want to collab please consider my request.",
			status: "",
		},
	];

	return (
		<div className="flex ">
			<div className="w-[83%]">
				<div className="w-full h-fit overflow-y-auto overflow-x-hidden flex flex-wrap justify-between p-2">
					{studentCollabReq.map((item, index) => {
						return (
							<div key={index} className="w-1/2 p-2 border-2 min-h-full rounded-md shadow-md cursor-pointer">
								<div className="flex justify-between w-full p-2">
									<img className="border border-1 rounded-full" src={item.sender.profilePhoto} alt="N/A" />
									<h1 className="text-2xl font-semibold m-2 ">{item.sender.name}</h1>
									<h1 className="m-2 text-xl font-semibold">{item.sender.university}</h1>
								</div>

								<div className="w-full">
									<div className="flex flex-wrap justify-between w-full">
										<div className="flex flex-col w-1/2 justify-start">
											<p className="m-2 font-semibold">Request Details:</p>
											<img
												className="border w-1/2 mx-2 border-black"
												src={item.project.coverPhoto}
												alt="N/A"
											/>
											<div className="m-2">
												<h2>{item.project.title}</h2>
												<p>{item.project.description}</p>
											</div>
											<p className="inline-block font-semibold m-2">Student message:</p>
											<p className="inline-block m-2 p-2 border border-black">{item.message}</p>
										</div>
										<div className="flex flex-col">
											<ul className=" p-2">
												<li className="p-2 m-1">Course: {item.sender.course}</li>
												<li className="p-2 m-1">Enrollment Number: {item.sender.enrollment}</li>
												<li className="p-2 m-1">Gender: {item.sender.gender}</li>
												<li className="p-2 m-1">E-mail: {item.sender.email}</li>
												<li className="m-1 p-2">Work E-mail: {item.sender.workEmail}</li>
											</ul>
										</div>
									</div>

									<div className="flex justify-center">
										<button className="border border-black active:scale-95 w-fit m-2 px-4 py-2 font-semibold text-sm bg-accent-green hover:bg-lime-600 text-white rounded-md shadow-sm">
											Accept
										</button>
										<button className="border border-black active:scale-95 w-fit m-2 px-4 py-2 font-semibold text-sm bg-accent-red hover:bg-red-600 text-white rounded-md shadow-sm">
											Reject
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
export default CollaborationRequest;
