function CollaborationRequest() {
	const studentCollabReq = [
		{
			sender: {
				name: "Ashwani Kumar",
				enrollment: "001100",
				gender: "M",
				profilePhoto: "https://picsum.photos/50",
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
				name: "Prashant Pal",
				enrollment: "001100",
				gender: "M",
				profilePhoto: "https://picsum.photos/50",
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
		<div className="w-full flex flex-wrap gap-3 p-2">
			{studentCollabReq.map((item, index) => {
				return (
					<div key={index} className="w-[49%] p-3 rounded-xl shadow bg-white">
						<p className="mb-2 text-lg font-bold">From: </p>
						<div className="flex gap-3 pl-10 py-2 rounded-lg bg-slate-200 cursor-pointer">
							<img
								className="border rounded-full w-[50px] h-[50px]"
								src={item.sender.profilePhoto}
								alt="N/A"
							/>
							<div>
								<h1 className="text-lg font-semibold ">{item.sender.name}</h1>
								<h1 className=" text-sm font-normal">{item.sender.university}</h1>
							</div>
						</div>
						<p className="mb-2 my-2 text-lg font-bold">For Project: </p>
						<div className="pl-3 py-3 bg-slate-100 rounded-lg">
							<p className="font-semibold text-slate-500">Project ID:</p>
							<p className="pl-2 mb-2">
								<a>AMITY2378</a>
							</p>
							<p className="font-semibold text-slate-500">Title: </p>
							<p className="pl-2 mb-2">Online Voting System</p>
							<p className="font-semibold text-slate-500">Description: </p>
							<p className="pl-2 mb-2">Asecureand efficient online voting system for democratic elections.</p>
							<p className="font-semibold text-slate-500">Owner: </p>
							<p className="pl-2 mb-2"><a>Ashutosh Verma</a></p>
						</div>

						<p className="mb-2 my-2 text-lg font-bold">Message:</p>
						<p className="py-2 pl-3  mb-2 bg-slate-100 rounded-lg">
							I have recently learned Blockchain technology, I want some hands-on experience by working on
							some project. Therefore I want to collaborate
						</p>

						<div className="w-full">
							<div className="flex justify-start">
								<button className="  active:scale-95 w-fit m-2 px-4 py-2 font-semibold text-sm bg-green-500 hover:bg-green-600 text-white rounded-md shadow-sm">
									Accept
								</button>
								<button className=" active:scale-95 w-fit m-2 px-4 py-2 font-semibold text-sm bg-slate-400 hover:bg-red-500 text-white rounded-md shadow-sm">
									Reject
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
export default CollaborationRequest;
