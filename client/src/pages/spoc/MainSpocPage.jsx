import { Outlet } from "react-router-dom";
import React from "react";

import Nav from "../../components/universal/nav/Nav";
import Sidebar from "../../components/universal/sidebar/Sidebar";

const MainSpocPage = () => {
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

export default MainSpocPage;
