const Collaborations=()=> {
	const projectFeed = [
		{
			owner: {
				profilePhoto: "abc",
				name: "Person 1",
				branch: "b.tech.",
				university: "amity",
			},
			coverPhoto: "abc",
			title: "Title 1",
			description:
				"lorem2",
			likes: [
				{
					userId: "xyz",
				},
			],
		},
		{
			owner: {
				profilePhoto: "abc",
				name: "Person 2",
				branch: "b.tech.",
				university: "amity",
			},
			coverPhoto: "abc",
			title: "Title 2",
			description:
				"abcdefghijk lkmsdkfjskdjfshdfkjh sdfhksd hfkhsdfhfh akjsdhfkj sdfksh kjfhskjfh skjhfkjshf kjshfshf",
			likes: [
				{
					userId: "xyz",
				},
			],
		},
		{
			owner: {
				profilePhoto: "abc",
				name: "Person 1",
				branch: "b.tech.",
				university: "amity",
			},
			coverPhoto: "abc",
			title: "Title 1",
			description:
				"abcdefghijklk msdkfjskd jfshdfkj hsdfhksdhf khsdfhfhakjsdhfk jsdfkshk jfhskjfh skjhfkjshf kjshfshf",
			likes: [
				{
					userId: "xyz",
				},
			],
		},
		{
			owner: {
				profilePhoto: "abc",
				name: "Person 2",
				branch: "b.tech.",
				university: "amity",
			},
			coverPhoto: "abc",
			title: "Title 2",
			description:
				"abcdefghijk lkmsdkfjskdjfshdfkjh sdfhksd hfkhsdfhfh akjsdhfkj sdfksh kjfhskjfh skjhfkjshf kjshfshf",
			likes: [
				{
					userId: "xyz",
				},
			],
		},
	];

	return (
		<div className=" p-1 ">
			<div className="flex flex-col gap-3">
				<h1 className="text-2xl font-semibold text-font">My Collaborations</h1>
				<div className="flex flex-wrap justify-between ">
					{projectFeed.map((item, index) => {
						return (
							<div key={index} className="border rounded-xl ">
								<img className="w-full" src={item.coverPhoto} alt="cover" />
								<h1 className="font-semibold text-xl">{item.title}</h1>
								<div className="p-2 w-full overflow-x-auto whitespace-normal break-normal">
									{/* Added whitespace-normal class here */}
									<p>{item.description}</p>
								</div>
								<span>Owner-</span>
								<span>{item.owner.name}</span>
								<img className="inline-block ps-4" src={item.owner.profilePhoto} alt="pfp not available" />
								<button className="active:scale-95 mb-1 w-full px-4 py-2 font-semibold text-sm bg-primary hover:bg-primary-light text-white rounded-md shadow-sm">
									View Details
								</button>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Collaborations;
