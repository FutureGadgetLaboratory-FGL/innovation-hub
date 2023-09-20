

const Sidebar = () => {
	return (
		<aside className="w-[17%] h-screen bg-[#f4f5fa] sticky ">
			<div className="text-[#7445cb] text-[1.4rem] h-[70px] font-bold  p-5 mb-2 border-b ">
				<h2>INNOVATION HUB</h2>
			</div>
			<ul className="flex flex-col items-start">
				<li className="text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] text-[white] bg-gradient-to-r  from-accent-lpurple to-accent-dpurple">
					<i className="fa-solid fa-house"></i>
					<a href="/">Dashboard</a>
				</li>
				<li className="text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] hover:rounded-[0_50px_50px_0] active:text-[white] active:bg-gradient-to-r active: from-accent-lpurple active: to-accent-dpurple">
					<a href="/">Upload Projects</a>
				</li>
				<li className="text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] hover:rounded-[0_50px_50px_0] active:text-[white] active:bg-gradient-to-r active: from-accent-lpurple active: to-accent-dpurple">
					<a href="/">Verify Students</a>
				</li>
				<li className="text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] hover:rounded-[0_50px_50px_0] active:text-[white] active:bg-gradient-to-r active: from-accent-lpurple active: to-accent-dpurple">
					<a href="/">Assign Admin</a>
				</li>
				<hr className="w-[100%] mt-5 mb-3"></hr>
				<li className="text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] hover:rounded-[0_50px_50px_0] active:text-[white] active:bg-gradient-to-r active: from-accent-lpurple active: to-accent-dpurple">
					<a href="/">Profile</a>
				</li>
				<li className="text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] hover:rounded-[0_50px_50px_0] active:text-[white] active:bg-gradient-to-r active: from-accent-lpurple active: to-accent-dpurple">
					<a href="/">Settings</a>
				</li>
				<li className="text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] hover:rounded-[0_50px_50px_0] active:text-[white] active:bg-gradient-to-r active: from-accent-lpurple active: to-accent-dpurple">
					<a href="/">Contact Us</a>
				</li>
				<li className="text-[#534f5a] text-[1.2rem] font-normal w-full mb-[5px] pl-5 pt-[7px] pb-[7px] hover:cursor-pointer hover:bg-[#cccdd1] hover:rounded-[0_50px_50px_0] active:text-[white] active:bg-gradient-to-r active: from-accent-lpurple active: to-accent-dpurple">
					<a href="/">Log Out</a>
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;
