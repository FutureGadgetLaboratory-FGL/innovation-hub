import { Outlet } from "react-router-dom";
import React from "react";

import Sidebar from "../../components/universal/Sidebar";
import Nav from "../../components/universal/Nav";

const MainStudentPage = () => {
	return (
		<div className="flex ">
			<Sidebar />
			<div className="w-4/5">
				<Nav />
				<Outlet />
			</div>
		</div>
	);
};

export default MainStudentPage;
