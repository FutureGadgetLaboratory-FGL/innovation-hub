

function Uploads() {
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
		
				<div className="w-full h-full overflow-y-auto">
					<h1 className="font-semibold text-3xl w-full text-center m-2 mb-4">My Uploads</h1>
					<div className="flex flex-wrap">
						{projectFeed.map((item, index) => {
							return (
								<div key={index} className="w-1/2 rounded-md shadow-md border p-2">
									<img className="w-full" src={item.coverPhoto} alt="Cover Image unavailable!" />
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
			
	);
}

export default Uploads;
