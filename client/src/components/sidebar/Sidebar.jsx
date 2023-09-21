import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import Nav from "../nav/Nav";

const Sidebar = () => {
	return (
		<aside className="w-[17%] h-screen bg-[#f4f5fa] border-r pr-1 sticky top-0">
			<div className="text-[#7445cb] text-[1.2rem] h-[60px] font-bold  flex justify-center items-center border-b mb-3 ">
				<h2>INNOVATION HUB</h2>
			</div>
			<ul className="flex flex-col items-start">
				<NavLink
					to={"/spoc/dashboard"}
					className="w-full ease-in duration-150 text-[#534f5a] text-[.9rem] font-normal mb-[5px] pl-6 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
				>
					<li className="">
						<i className="fa-solid fa-house"></i>
						Dashboard
					</li>
				</NavLink>
				<NavLink
					to={"/student/upload-project"}
					className="w-full ease-in duration-150 text-[#534f5a] text-[.9rem] font-normal mb-[5px] pl-6 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
				>
					<li className=" ">Upload Projects</li>
				</NavLink>
				<NavLink
					to={"/spoc/verify-students"}
					className="w-full ease-in duration-150 text-[#534f5a] text-[.9rem] font-normal mb-[5px] pl-6 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0]"
				>
					<li>Verify Students</li>
				</NavLink>

				<NavLink
					to={"/spoc/assign-admin"}
					className="w-full ease-in duration-150 text-[#534f5a] text-[.9rem] font-normal mb-[5px] pl-6 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0]"
				>
					<li>Assign Admin</li>
				</NavLink>
				<hr className="w-[100%] mt-3 mb-2"></hr>

				<NavLink
					to={"/spoc/profile"}
					className="w-full ease-in duration-150 text-[#534f5a] text-[.9rem] font-normal mb-[5px] pl-6 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0]"
				>
					<li>
						<FontAwesomeIcon icon="fa-solid fa-user" className="pr-3" />
						Profile
					</li>
				</NavLink>

				<NavLink
					to={"/spoc/settings"}
					className="w-full ease-in duration-150 text-[#534f5a] text-[.9rem] font-normal mb-[5px] pl-6 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0]"
				>
					<li>
						<FontAwesomeIcon icon="fa-solid fa-gear" className="pr-3" />
						Settings
					</li>
				</NavLink>

				<NavLink
					to={"/spoc/contact-us"}
					className="w-full ease-in duration-150 text-[#534f5a] text-[.9rem] font-normal mb-[5px] pl-6 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0]"
				>
					<li>
						<FontAwesomeIcon icon="fa-solid fa-message" className="pr-3" />
						Contact Us
					</li>
				</NavLink>

				<NavLink
					to={"/spoc/logout"}
					className="w-full ease-in duration-150 text-[#534f5a] text-[.9rem] font-normal mb-[5px] pl-6 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0]"
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
