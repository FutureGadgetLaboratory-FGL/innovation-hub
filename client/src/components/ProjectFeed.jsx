import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function ProjectFeed() {
	const user = {
		user: {
			_id: "abcd",
			role: "Student",
		},
	};
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

	const [currI, setCurrI] = useState(null);

	return (
		<div className=" w-full h-full mt-5">
			<h1 className="ml-5 mb-4  text-[20px] font-bold">Projects Feed</h1>
			<hr className="w-1/3 ml-5 mb-3" />
			<div className="flex flex-col gap-3 justify-center items-start">
				{projectFeed.map((item, index) => {
					return (
						<div
							key={index}
							className="bg-white mr-4 mb-2 rounded-xl shadow-[rgba(0,0,0,0.1)_0px_15px_20px_0px,rgba(0,0,0,0.04)_0px_10px_10px_-5px] ml-4 p-3 flex gap-5 "
						>
							<div className="w-1/2 flex overflow-y-auto">
								<img
									className={`${
										index === currI ? "w-0" : "w-full"
									} h-full transition ease-in-out delay-500 duration-1000`}
									src={item.coverPhoto}
									alt="img"
								/>
								<div
									className={`h-full ${
										index === currI ? "w-full" : "w-0"
									} flex flex-col justify-evenly overflow-hidden transition ease-in-out delay-100 duration-1000`}
								>
									<h1 className="w-full font-semibold p-2">Send Collaboration Request to your SPOC</h1>
									<textarea
										className="border border-black justify-start w-full h-1/2 p-2 whitespace-normal break-words"
										placeholder="Tell us why you want to collaborate?"
									/>
									<button className="active:scale-95 mt-3 w-fit mb-1 px-4 py-2 font-semibold text-[12px] bg-accent-green hover:bg-lime-600 text-white rounded-md">
										Submit
									</button>
								</div>
							</div>

							<div className="right flex flex-col gap-3 w-1/2">
								<div className="profile">
									<div className="flex justify-start items-center gap-3">
										<img className="rounded-full" src={item.owner.profilePhoto} alt="pfp not available!" />
										<div className="flex flex-col gap-0">
											<h2 className="text-[12px] font-normal">{item.owner.name}</h2>
											<p className="text-[12px] font-normal">{item.owner.branch}</p>
											<h3 className="text-[12px] font-normal">{item.owner.university}</h3>
										</div>
									</div>
								</div>
								<div className="flex flex-col gap-2">
									<h1 className="text-lg font-semibold">{item.title}</h1>
									<p className="text-sm break-words">{item.description}</p>
								</div>
								<div className="flex justify-start items-center gap-4 mt-8 ">
									<button className="bg-transparent flex items-center justify-center text-lg text-accent-red">
										<FontAwesomeIcon icon=" fa-heart" className="mr-2" />
										{item.likes.length}
									</button>
									<button className="bg-transparent text-lg text-accent-gray">
										<FontAwesomeIcon icon=" fa-comment" />
									</button>
									<button className="bg-transparent text-lg text-sky-700">
										<FontAwesomeIcon icon=" fa-share" />
									</button>
								</div>
								{user.user._id && user.user.role === "Student" && (
									<div className="flex justify-start items-center">
										<button
											on
											Click={(e) => {
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
				})}
			</div>
		</div>
	);
}

export default ProjectFeed;
