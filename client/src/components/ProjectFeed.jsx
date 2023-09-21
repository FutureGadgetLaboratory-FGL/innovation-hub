import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ProjectFeed() {
	const projectFeed = [
		{
			owner: {
				profilePhoto: "https://picsum.photos/80",
				name: "Alice Smith",
				branch: "Electrical Engineering",
				university: "Harvard University",
			},
			coverPhoto: "https://picsum.photos/1080/600",
			title: "Electricity Generation Project",
			description:
				"This project explores innovative methods for generating clean and sustainable electricity. It involves the design and testing of solar panels and wind turbines.",
			likes: [
				{
					userId: "xyz",
				},
				{
					userId: "abc",
				},
			],
		},
		{
			owner: {
				profilePhoto: "https://picsum.photos/80",
				name: "Bob Johnson",
				branch: "Mechanical Engineering",
				university: "MIT",
			},
			coverPhoto: "https://picsum.photos/1080/600",
			title: "Mechanical Design Challenge",
			description:
				"In this project, we tackle complex mechanical design challenges, such as creating efficient gears and mechanisms for industrial applications.",
			likes: [
				{
					userId: "def",
				},
				{
					userId: "ghi",
				},
			],
		},
		{
			owner: {
				profilePhoto: "https://picsum.photos/80",
				name: "Eva Brown",
				branch: "Computer Science",
				university: "Stanford University",
			},
			coverPhoto: "https://picsum.photos/1080/600",
			title: "AI Chatbot Development",
			description:
				"Our team is working on creating an advanced AI chatbot using natural language processing and machine learning techniques. Stay tuned for updates!",
			likes: [
				{
					userId: "jkl",
				},
			],
		},
	];

	return (
		<div className=" w-full h-full mt-5">
			<h1 className="ml-4 mb-4  text-[25px] font-bold">Projects Feed</h1>
			<hr className="w-1/3 ml-4 mb-5" />
			<div className="flex flex-col gap-5 justify-center items-start">
				{projectFeed.map((item, index) => {
					return (
						<div
							key={index}
							className="bg-white m-3 rounded-xl shadow-[rgba(0,0,0,0.1)_0px_15px_20px_0px,rgba(0,0,0,0.04)_0px_10px_10px_-5px] ml-3 p-4 flex gap-5 "
						>
							<div className="left w-1/2">
								<img className="h-full" src={item.coverPhoto} alt="img" />
							</div>
							<div className="right flex flex-col gap-3 w-1/2">
								<div className="profile">
									<div className="flex justify-start items-center gap-4">
										<img className="rounded-full" src={item.owner.profilePhoto} alt="pfp not available!" />
										<div className="flex flex-col gap-0">
											<h2 className="text-[14px] font-normal">{item.owner.name}</h2>
											<p className="text-[14px] font-normal">{item.owner.branch}</p>
											<h3 className="text-[14px] font-normal">{item.owner.university}</h3>
										</div>
									</div>
								</div>
								<div className="flex flex-col gap-2">
									<h1 className="text-[18px] font-semibold">{item.title}</h1>
									<p className="text-[14px] break-words">{item.description}</p>
									<p className="text-[12px] font-medium mt-2">
										<FontAwesomeIcon icon="fa-solid fa-heart" className="mr-3" />
										{item.likes.length}
									</p>
								</div>
								<div className="flex justify-start gap-4 mt-8 ">
									<button className="bg-transparent text-[20px] text-accent-red">
										<FontAwesomeIcon icon=" fa-heart" />
									</button>
									<button className="bg-transparent text-[20px] text-accent-gray">
										<FontAwesomeIcon icon=" fa-comment" />
									</button>
									<button className="bg-transparent text-[20px] text-sky-700">
										<FontAwesomeIcon icon=" fa-share" />
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ProjectFeed;
