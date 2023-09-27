import { Outlet, useLocation } from "react-router-dom";
import React from "react";

import Nav from "../../components/universal/Nav";
import Sidebar from "../../components/universal/Sidebar";

const RootPage = () => {

	// ! Here we are checking whether a user is spoc or student by looking at url
	// ! but this should be done at the time of login of a student or spoc and send that parameter using redux only one time
	// ! NEED TO BE FIXED LATER

	const location = useLocation();
	const user = location.pathname.split('/')[1]

	
	return (
		<div className="flex ">
			<Sidebar user={user}/>
			<div className="w-4/5">
				<Nav user={user}/>
				<div className="m-3">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default RootPage;
