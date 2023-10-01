const Collaborations = () => {
	const projectFeed = [
		{
			owner: {
				profilePhoto: "https://picsum.photos/40",
				name: "John Smith",
				branch: "Computer Science",
				university: "Harvard University",
			},
			coverPhoto: "https://picsum.photos/420/200",
			title: "Online Voting System",
			description: "Asecureand efficient online voting system for democratic elections.",
			likes: [
				{
					userId: "user123",
				},
				{
					userId: "user456",
				},
			],
		},

		{
			owner: {
				profilePhoto: "https://picsum.photos/40",
				name: "Emily Davis",
				branch: "Information Technology",
				university: "Stanford University",
			},
			coverPhoto: "https://picsum.photos/420/200",
			title: "E-Voting Platform",
			description: "Revolutionizing the way we vote with a modern electronic voting platform.",
			likes: [
				{
					userId: "user789",
				},
			],
		},
		{
			owner: {
				profilePhoto: "https://picsum.photos/40",
				name: "Maria Rodriguez",
				branch: "Computer Engineering",
				university: "MIT",
			},
			coverPhoto: "https://picsum.photos/420/200",
			title: "Digital Democracy",
			description: "Empowering citizens through a digital democracy platform for online voting.",
			likes: [
				{
					userId: "user101",
				},
				{
					userId: "user202",
				},
			],
		},

		{
			owner: {
				profilePhoto: "https://picsum.photos/40",
				name: "James Johnson",
				branch: "Electrical Engineering",
				university: "Caltech",
			},
			coverPhoto: "https://picsum.photos/420/200",
			title: "Vote Anywhere",
			description: "Ensuring accessibility with a vote-from-anywhere online voting solution.",
			likes: [
				{
					userId: "user303",
				},
			],
		},
	];

	return (
		<div className=" p-1 ">
			<div className="flex flex-col gap-3">
				<h1 className="text-2xl font-semibold text-font">My Collaborations</h1>
				<div className="flex flex-wrap">
					{projectFeed.map((item, index) => {
						return (
							<div
								key={index}
								className=" rounded-xl m-2 w-[31%] p-2 h-full flex flex-col justify-center items-start gap-2 bg-white shadow"
							>
								<img className="w-full rounded-lg" src={item.coverPhoto} alt="cover" />
								<div className="flex flex-col ml-2">
									<h1 className="font-semibold text-xl">{item.title}</h1>
									<div className=" break-normal mt-1">
										<p>{item.description}</p>
									</div>
									<div className="flex gap-2 justify-start items-center mb-2 mt-3">
										<img
											className="inline-block rounded-full"
											src={item.owner.profilePhoto}
											alt="profile_picture"
										/>
										<h3 className="font-semibold">{item.owner.name}</h3>
									</div>
								</div>

								<button className="active:scale-98 mb-1 w-full py-2 font-semibold text-sm bg-primary hover:bg-blue-500 text-white rounded-md ">
									View Details
								</button>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Collaborations;
