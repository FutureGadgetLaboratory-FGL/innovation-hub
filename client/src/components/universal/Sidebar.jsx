import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
	return (
		<aside className="w-[17%] h-screen bg-[#f4f5fa] border-r pr-1 sticky top-0">
			<div className="text-[#7445cb] text-[1.2rem] h-[60px] font-semibold  flex flex-col justify-center items-start border-b mb-3 p-[20px]">
				<h2>STUDENT</h2>
				<h2>INNOVATION HUB</h2>
			</div>
			<ul className="flex flex-col items-start">
				<NavLink
					to={"/spoc/page/dashboard"}
					className={
						"ease-in duration-150 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
					}
				>
					<li>
						<i className="fa-solid fa-house"></i>
						Dashboard
					</li>
				</NavLink>

				<NavLink
					to={"/spoc/page/upload-requests"}
					className={
						"ease-in duration-150 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
					}
				>
					<li>Upload Requests</li>
				</NavLink>
				<NavLink
					to={"/spoc/page/collaboration-requtest"}
					className={
						"ease-in duration-150 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
					}
				>
					<li>Collaboration Requests</li>
				</NavLink>
				<NavLink
					to={"/spoc/page/verify-student"}
					className={
						"ease-in duration-150 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
					}
				>
					<li>Verify Students</li>
				</NavLink>
				<NavLink
					to={"/spoc/page/assign-admin"}
					className={
						"ease-in duration-150 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
					}
				>
					<li>Assign Admin</li>
				</NavLink>

				<hr className="w-[100%] mt-5 mb-3"></hr>

				<NavLink
					to={"/spoc/page/profile"}
					className={
						"ease-in duration-150 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
					}
				>
					<li>
						<FontAwesomeIcon icon="fa-solid fa-user" className="pr-3" />
						Profile
					</li>
				</NavLink>
				<NavLink
					to={"/spoc/page/settings"}
					className={
						"ease-in duration-150 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
					}
				>
					<li>
						<FontAwesomeIcon icon="fa-solid fa-gear" className="pr-3" />
						Settings
					</li>
				</NavLink>
				<NavLink
					to={"/contact-us"}
					className={
						"ease-in duration-150 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
					}
				>
					<li>
						<FontAwesomeIcon icon="fa-solid fa-message" className="pr-3" />
						Contact Us
					</li>
				</NavLink>
				<NavLink
					to={"/"}
					className={
						"ease-in duration-150 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
					}
				>
					<li>
						<FontAwesomeIcon icon="sign-out-alt" className="pr-3" />
						Log Out
					</li>
				</NavLink>
			</ul>
		</aside>
	);
};

export default Sidebar;
