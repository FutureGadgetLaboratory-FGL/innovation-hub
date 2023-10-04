import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentsByFilter, updateStudentStatus } from "../../redux/actions/studentActions";

const VerifyStudent = () => {

	const user = useSelector(state => state.user.user);
	const students = useSelector(state => state.student.students);
	const dispatch = useDispatch();

	const verifyStudent = (student) => {
		dispatch(updateStudentStatus({ id: student._id, status: "verified", verifiedBy: user._id }))
			.then(dispatch(getStudentsByFilter({ university: user?.university, status: "pending" })))
	};

	const rejectStudent = (student) => {
		dispatch(updateStudentStatus({ id: student._id, status: "rejected", verifiedBy: user._id }))
			.then(dispatch(getStudentsByFilter({ university: user?.university, status: "pending" })))
	}

	useEffect(() => {
		dispatch(getStudentsByFilter({ university: user?.university, status: "pending" }))
	}, [dispatch, user?.university])

	return (
		<>
			<p className="text-2xl font-semibold pl-5 mb-4 text-slate-600">Verify Students</p>
			<div className="w-full flex flex-wrap gap-5 pl-4 ">
				{students.map((item, index) => {
					return (
						<div key={index} className=" rounded-xl shadow p-4 w-[45%] flex flex-col gap-2">
							<div className="flex justify-start gap-4 w-full p-2 items-center rounded-md bg-violet-500">
								<img className="w-[10%] rounded-full" src={item.profilePhoto ? item.profilePhoto : "../images/profile.png"} alt="" />
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
												<td className="p-1 align-top w-1/3 font-semibold text-slate-500">Gender: </td>
												<td className="p-1 align-top">{item.gender}</td>
											</tr>
											<tr>
												<td className="p-1 align-top w-1/3 font-semibold text-slate-500">ID card: </td>
												<td className="p-1 align-top text-blue-400 hover:text-blue-500">
													<a href={item.idCardFront}>View ID Card Front</a>
												</td>
												<td className="p-1 align-top text-blue-400 hover:text-blue-500">
													<a href={item.idCardBack}>View ID Card Back</a>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>

							<div className="flex justify-start mt-3">
								<button className="  active:scale-95 w-fit m-2 px-4 py-2 font-semibold text-sm bg-green-500 hover:bg-green-600 text-white rounded-md shadow-sm" onClick={() => verifyStudent(item)}>
									Accept
								</button>
								<button className=" active:scale-95 w-fit m-2 px-4 py-2 font-semibold text-sm bg-slate-400 hover:bg-red-500 text-white rounded-md shadow-sm" onClick={() => rejectStudent(item)}>
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
