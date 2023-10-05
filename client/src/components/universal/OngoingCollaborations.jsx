import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCollaborationsByUniversityId } from "../../redux/actions/collaborationActions";

const OngoingCollaborations = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.user);
	const collaborations = useSelector((state) => state.collaboration.collaborations);

	useEffect(() => {
		dispatch(getCollaborationsByUniversityId(user.university));
	}, [dispatch, user]);

	return (
		<div className=" rounded-lg w-fit p-4 flex flex-col grow bg-violet-300 ">
			<p className="text-7xl text-white mb-1">{collaborations.length}</p>
			<p className="text-2xl text-white">Ongoing Collaborations</p>
		</div>
	);
};

export default OngoingCollaborations;
