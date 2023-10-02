const VerifyStudent = () => {
	const studentReq = [
		{
			name: "Naman Chawla",
			email: "naman.chawla@s.amity.edu",
			gender: "M",
			profilePhoto: "/images/profile.png",
			university: "Amity University",
			course: "B-Tech CSE",
			workEmail: "abc@gmail.com",
			startYear: "2020",
			endYear: "2024",
			idCardFront: "https://picsum.photos/100/200",
			idCardBack: "https://picsum.photos/100/200",
			enrollment: "A7605221098",
		},
		{
			name: "Rahul Kumar",
			email: "rahul.kumar@s.amity.edu",
			gender: "M",
			profilePhoto: "/images/profile.png",
			university: "Amity University",
			course: "B-Tech CSE",
			workEmail: "abc@gmail.com",
			startYear: "2020",
			endYear: "2024",
			idCardFront: "https://picsum.photos/100/200",
			idCardBack: "https://picsum.photos/100/200",
			enrollment: "A7605221087",
		},
		{
			name: "Ashish Singh",
			email: "ashish.singh@s.amity.edu",
			gender: "M",
			profilePhoto: "/images/profile.png",
			university: "Amity University",
			course: "B-Tech CSE",
			workEmail: "abc@gmail.com",
			startYear: "2020",
			endYear: "2024",
			idCardFront: "https://picsum.photos/100/200",
			idCardBack: "https://picsum.photos/100/200",
			enrollment: "A7605221059",
		},
		{
			name: "Ashutosh Verma",
			email: "ashutosh.verma@s.amity.edu",
			gender: "M",
			profilePhoto: "/images/profile.png",
			university: "Amity University",
			course: "B-Tech CSE",
			workEmail: "abc@gmail.com",
			startYear: "2020",
			endYear: "2024",
			idCardFront: "https://picsum.photos/100/200",
			idCardBack: "https://picsum.photos/100/200",
			enrollment: "A7605221058",
		},
	];

	return (
		<>
			<p className="text-2xl font-semibold pl-5 mb-4 text-slate-600">Verify Students</p>
			<div className="w-full flex flex-wrap gap-5 pl-4 ">
				{studentReq.map((item, index) => {
					return (
						<div key={index} className=" rounded-xl shadow p-4 w-[45%] flex flex-col gap-2">
							<div className="flex justify-start gap-4 w-full p-2 items-center rounded-md bg-violet-500">
								<img className="w-[10%] rounded-full" src={item.profilePhoto} alt="N/A" />
								<div>
									<h1 className="text-lg font-semibold text-white ">{item.name}</h1>
									<h1 className="text-sm text-white">{item.university}</h1>
								</div>
							</div>

							<div className="w-full">
								<div className="p-3 bg-violet-100 rounded-lg">
									<table className="w-full">
										<tbody>
											<tr>
												<td className="p-1 align-top w-1/3 font-semibold text-slate-500">Enrollment: </td>
												<td className="p-1 align-top">{item.enrollment}</td>
											</tr>
											<tr>
												<td className="p-1 align-top w-1/3 font-semibold text-slate-500">Course: </td>
												<td className="p-1 align-top">{item.course}</td>
											</tr>
											<tr>
												<td className="p-1 align-top w-1/3 font-semibold text-slate-500">Batch: </td>
												<td className="p-1 align-top">
													{item.startYear}-{item.endYear}
												</td>
											</tr>
											<tr>
												<td className="p-1 align-top w-1/3 font-semibold text-slate-500">Email: </td>
												<td className="p-1 align-top">{item.email}</td>
											</tr>
											<tr>
												<td className="p-1 align-top w-1/3 font-semibold text-slate-500">ID card: </td>
												<td className="p-1 align-top text-blue-400 hover:text-blue-500">
													<a href="">View</a>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>

							<div className="flex justify-start mt-3">
								<button className="  active:scale-95 w-fit m-2 px-4 py-2 font-semibold text-sm bg-green-500 hover:bg-green-600 text-white rounded-md shadow-sm">
									Accept
								</button>
								<button className=" active:scale-95 w-fit m-2 px-4 py-2 font-semibold text-sm bg-slate-400 hover:bg-red-500 text-white rounded-md shadow-sm">
									Reject
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};
export default VerifyStudent;
