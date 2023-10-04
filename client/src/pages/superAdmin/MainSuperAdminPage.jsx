import { Outlet } from "react-router-dom";
import React from "react";

import Sidebar from "../../components/universal/Sidebar";
import Nav from "../../components/universal/Nav";

const MainSuperAdminPage = () => {
	return (
		<div className="flex flex-col">
			<Nav />
			<div className="flex">
				<Sidebar user="superAdmin" />
				<div className="w-4/5">
				<div className="m-3 mb-4 pt-[80px]">
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainSuperAdminPage;
