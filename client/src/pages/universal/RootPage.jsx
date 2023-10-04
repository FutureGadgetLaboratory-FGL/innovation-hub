import { Outlet, NavLink } from "react-router-dom";
import React from "react";

import Nav from "../../components/universal/Nav";
import Sidebar from "../../components/universal/Sidebar";
import { useSelector } from "react-redux";
import PreVerification from "./PreVerification";

const RootPage = () => {
	// ! Here we are checking whether a user is spoc or student by looking at url
	// ! but this should be done at the time of login of a student or spoc and send that parameter using redux only one time
	// ! NEED TO BE FIXED LATER

	const user = useSelector((state) => state.user.user);

	return (
		<div className="flex flex-col">
			{
				!user ? (
					<div className="flex flex-col items-center justify-center w-full h-screen bg-background">
						<div className="flex flex-col items-center justify-center w-1/2 h-1/2 bg-white rounded-lg shadow-lg">
							<div className="flex flex-col items-center justify-center w-full h-full">
								<h1 className="text-4xl font-bold text-center text-accent-indigo">
									Please Sign In
								</h1>
								<NavLink
									to={"/"}
									className="hover:text-slate-300"
								>
									<button className='bg-violet-600 text-white px-3 py-2 rounded-md mt-5 hover:bg-violet-700'>
										Back to Home
									</button>
								</NavLink>
							</div>
						</div>
					</div>
				) : (
					(user.status === "pending") ? (
						<PreVerification />
					) : (
						<>
							{/* <Nav />
							<div className="flex">
								<Sidebar />
								<div className="flex flex-col w-full">
									<div className="flex flex-col w-full">
										<Outlet />
									</div>
								</div>
							</div> */}
							<Nav />
							<div className="flex">
								<Sidebar />
								<div className="w-full">
									<div className="m-3 mb-4 pt-[80px]">
										<Outlet />
									</div>
								</div>
							</div>
						</>
					)
				)
			}
		</div>
	);
};

export default RootPage;
