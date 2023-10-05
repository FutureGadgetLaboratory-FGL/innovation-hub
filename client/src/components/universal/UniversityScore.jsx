import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUniversityById } from "../../redux/actions/universityActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UniversityScore = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.user);
	const university = useSelector((state) => state.university.myUniversity);
	const loading = useSelector((state) => state.university.loading);
	const error = useSelector((state) => state.university.err);

	useEffect(() => {
		dispatch(getUniversityById(user.university));
	}, [dispatch, user]);
	return (
		<div className="rounded-lg w-fit p-4 flex flex-col grow bg-violet-300 ">
			<p className="text-7xl text-white mb-1">
				{(loading && <FontAwesomeIcon icon="spinner" className="text-4xl text-blue-500 animate-spin" />) ||
					(error && <FontAwesomeIcon icon="exclamation-circle" className="text-4xl text-red-500" />) ||
					university?.popularity}
			</p>
			<p className="text-2xl text-white">University Score</p>
		</div>
	);
};

export default UniversityScore;
