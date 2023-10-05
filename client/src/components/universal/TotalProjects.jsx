import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectsByUniversityId } from '../../redux/actions/projectActions';

const TotalProjects = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.user);
	const projects = useSelector((state) => state.project.projects);

	useEffect(() => {
		dispatch(getProjectsByUniversityId(user.university));
	}, [dispatch, user]);
    return (
			<div className=" rounded-lg w-fit p-4 flex flex-col grow bg-violet-300 ">
				<p className="text-7xl text-white mb-1">{projects.length}</p>
				<p className="text-2xl text-white">Total Verified Projects</p>
			</div>
		);
}

export default TotalProjects;
