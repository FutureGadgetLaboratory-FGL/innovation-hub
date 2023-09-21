import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
	const user={
		user:{
			_id:"abcd",
			role:"Student"
		}
	}
	return (
		<aside className="w-[17%] h-screen bg-[#f4f5fa] sticky top-0">
			<div className="text-[#7445cb] text-[1.4rem] h-[70px] font-bold  flex justify-center items-center border-b ">
				<h2>INNOVATION HUB</h2>
			</div>
			{ user.user.role==="SPOC"?
					(
						<ul className="flex flex-col items-start">
				<li className="ease-in duration-150 text-[#534f5a] text-[1.2rem] font-normal mt-2 w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] text-[white] bg-gradient-to-r  from-accent-lpurple to-accent-dpurple">
					<i className="fa-solid fa-house"></i>
					<a href="/">Dashboard</a>
				</li>
				<li className="ease-in duration-150 text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] hover:rounded-[0_50px_50px_0] active:text-[white] active:bg-gradient-to-r active: from-accent-lpurple active: to-accent-dpurple">
					<a href="/">Upload Requests</a>
				</li>
				<li className="ease-in duration-150 text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] hover:rounded-[0_50px_50px_0] active:text-[white] active:bg-gradient-to-r active: from-accent-lpurple active: to-accent-dpurple">
					<a href="/spoc_collab_requests">Collaboration Requests</a>
				</li>
				<li className="ease-in duration-150 text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] hover:rounded-[0_50px_50px_0] active:text-[white] active:bg-gradient-to-r active: from-accent-lpurple active: to-accent-dpurple">
					<a href="/verify_student">Verify Students</a>
				</li>
				<li className="ease-in duration-150 text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] hover:rounded-[0_50px_50px_0] active:text-[white] active:bg-gradient-to-r active: from-accent-lpurple active: to-accent-dpurple">
					<a href="/">Assign Admin</a>
				</li>
				<hr className="w-[100%] mt-5 mb-3"></hr>
				<li className="ease-in duration-150 text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] hover:rounded-[0_50px_50px_0] active:text-[white] active:bg-gradient-to-r active: from-accent-lpurple active: to-accent-dpurple">
					<FontAwesomeIcon icon="fa-solid fa-user" className="pr-3" />
					<a href="/">Profile</a>
				</li>
				<li className="ease-in duration-150 text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] hover:rounded-[0_50px_50px_0] active:text-[white] active:bg-gradient-to-r active: from-accent-lpurple active: to-accent-dpurple">
					<FontAwesomeIcon icon="fa-solid fa-gear" className="pr-3" />
					<a href="/">Settings</a>
				</li>
				<li className="ease-in duration-150 text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] hover:rounded-[0_50px_50px_0] active:text-[white] active:bg-gradient-to-r active: from-accent-lpurple active: to-accent-dpurple">
					<FontAwesomeIcon icon="fa-solid fa-message" className="pr-3" />
					<a href="/">Contact Us</a>
				</li>
				<li className="ease-in duration-150 text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] hover:rounded-[0_50px_50px_0] active:text-[white] active:bg-gradient-to-r active: from-accent-lpurple active: to-accent-dpurple">
					<FontAwesomeIcon icon="sign-out-alt" className="pr-3" />
					<a href="/">Log Out</a>
				</li>
			</ul>
					):user.user.role==="Student"?
					(
						<ul className="flex flex-col items-start">
				<li className="ease-in duration-150 text-[#534f5a] text-[1.2rem] font-normal mt-2 w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] text-[white] bg-gradient-to-r  from-accent-lpurple to-accent-dpurple">
					<i className="fa-solid fa-house"></i>
					<a href="/">Dashboard</a>
				</li>
				<li className="ease-in duration-150 text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] hover:rounded-[0_50px_50px_0] active:text-[white] active:bg-gradient-to-r active: from-accent-lpurple active: to-accent-dpurple">
					<a href="/compete">Competitions</a>
				</li>
				<li className="ease-in duration-150 text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] hover:rounded-[0_50px_50px_0] active:text-[white] active:bg-gradient-to-r active: from-accent-lpurple active: to-accent-dpurple">
					<a href="/">Collaboration</a>
				</li>
				<li className="ease-in duration-150 text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] hover:rounded-[0_50px_50px_0] active:text-[white] active:bg-gradient-to-r active: from-accent-lpurple active: to-accent-dpurple">
					<a href="/">Upload Project</a>
				</li>
				<hr className="w-[100%] mt-5 mb-3"></hr>
				<li className="ease-in duration-150 text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] hover:rounded-[0_50px_50px_0] active:text-[white] active:bg-gradient-to-r active: from-accent-lpurple active: to-accent-dpurple">
					<FontAwesomeIcon icon="fa-solid fa-user" className="pr-3" />
					<a href="/">Profile</a>
				</li>
				<li className="ease-in duration-150 text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] hover:rounded-[0_50px_50px_0] active:text-[white] active:bg-gradient-to-r active: from-accent-lpurple active: to-accent-dpurple">
					<FontAwesomeIcon icon="fa-solid fa-gear" className="pr-3" />
					<a href="/">Settings</a>
				</li>
				<li className="ease-in duration-150 text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] hover:rounded-[0_50px_50px_0] active:text-[white] active:bg-gradient-to-r active: from-accent-lpurple active: to-accent-dpurple">
					<FontAwesomeIcon icon="fa-solid fa-message" className="pr-3" />
					<a href="/">Contact Us</a>
				</li>
				<li className="ease-in duration-150 text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] hover:rounded-[0_50px_50px_0] active:text-[white] active:bg-gradient-to-r active: from-accent-lpurple active: to-accent-dpurple">
					<FontAwesomeIcon icon="sign-out-alt" className="pr-3" />
					<a href="/">Log Out</a>
				</li>
			</ul>
					):
					(
						<ul className="flex flex-col items-start">
				<li className="ease-in duration-150 text-[#534f5a] text-[1.2rem] font-normal mt-2 w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] text-[white] bg-gradient-to-r  from-accent-lpurple to-accent-dpurple">
					<i className="fa-solid fa-house"></i>
					<a href="/">Dashboard</a>
				</li>
				<li className="ease-in duration-150 text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] hover:rounded-[0_50px_50px_0] active:text-[white] active:bg-gradient-to-r active: from-accent-lpurple active: to-accent-dpurple">
					<a href="/">Organize Competitions</a>
				</li>
				<li className="ease-in duration-150 text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] hover:rounded-[0_50px_50px_0] active:text-[white] active:bg-gradient-to-r active: from-accent-lpurple active: to-accent-dpurple">
					<a href="/">Manage Merch Shops</a>
				</li>
				<li className="ease-in duration-150 text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] hover:rounded-[0_50px_50px_0] active:text-[white] active:bg-gradient-to-r active: from-accent-lpurple active: to-accent-dpurple">
					<a href="/">Recruiter Verification</a>
				</li>
				<hr className="w-[100%] mt-5 mb-3"></hr>
				<li className="ease-in duration-150 text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] hover:rounded-[0_50px_50px_0] active:text-[white] active:bg-gradient-to-r active: from-accent-lpurple active: to-accent-dpurple">
					<FontAwesomeIcon icon="fa-solid fa-user" className="pr-3" />
					<a href="/">Profile</a>
				</li>
				<li className="ease-in duration-150 text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] hover:rounded-[0_50px_50px_0] active:text-[white] active:bg-gradient-to-r active: from-accent-lpurple active: to-accent-dpurple">
					<FontAwesomeIcon icon="fa-solid fa-gear" className="pr-3" />
					<a href="/">Settings</a>
				</li>
				<li className="ease-in duration-150 text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] hover:rounded-[0_50px_50px_0] active:text-[white] active:bg-gradient-to-r active: from-accent-lpurple active: to-accent-dpurple">
					<FontAwesomeIcon icon="fa-solid fa-message" className="pr-3" />
					<a href="/">Contact Us</a>
				</li>
				<li className="ease-in duration-150 text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] hover:rounded-[0_50px_50px_0] active:text-[white] active:bg-gradient-to-r active: from-accent-lpurple active: to-accent-dpurple">
					<FontAwesomeIcon icon="sign-out-alt" className="pr-3" />
					<a href="/">Log Out</a>
				</li>
			</ul>
					)
				}
				
		</aside>
	);
};

export default Sidebar;
