import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentsByUniversityId } from "../../redux/actions/studentActions";

const EnrolledStudents = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.user);
	const students = useSelector((state) => state.student.students);

	useEffect(() => {
		dispatch(getStudentsByUniversityId(user.university));
	}, [dispatch, user]);

	return (
		<div className=" rounded-lg w-fit p-4 grow bg-violet-300 ">
			<p className="text-7xl text-white mb-1 ">{students.length}</p>
			<p className="text-2xl text-white">Students Enrolled</p>
		</div>
	);
};

export default EnrolledStudents;
