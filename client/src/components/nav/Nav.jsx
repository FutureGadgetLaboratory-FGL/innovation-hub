
const Nav = ()=>{
    return (
			<nav className="w-[83%] h-[70px] bg-background flex justify-between pl-20 pr-20  items-center">
				<div className="search-bar border">
					<div class="search_wrap search_wrap_1" className="w-[300px] mx-auto ">
						<div class="search_box" className="relative w-[300px] h-[40px]">
							<input
								type="text"
								class="input"
								placeholder="search..."
								className="text-[#8b7d77] border-0 absolute w-full h-full text-lg px-5 py-2.5 rounded-[3px] left-0 top-0"
							/>
							<div
								class="btn btn_common"
								className="bg-slate-700 absolute w-[60px] h-full z-[1] cursor-pointer right-0 top-0"
							>
								<i className="fas fa-search absolute  -translate-x-2/4 -translate-y-2/4 text-white text-[20px] left-2/4 top-2/4"></i>
							</div>
						</div>
					</div>
				</div>
                <button>
                    <img src="./images/profile-icon.png" alt="profile" className="w-12" />
                </button>
			</nav>
		);
}

export default Nav;