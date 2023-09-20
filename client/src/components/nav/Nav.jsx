import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Nav = () => {
	let [modal, showModal] = useState("hidden");
	const onclickHandler = () => {
		if (modal === "hidden") {
			showModal((modal = "block"));
		} else showModal((modal = "hidden"));
        
	};
    window.onclick = function (event) {
            if(event.target === document.getElementById('modal')){
				showModal((modal = "hidden"));
			}
		};

	

	return (
		<nav className="w-[83%] h-[70px] bg-background flex justify-between pl-20 pr-20  items-center">
			<div className="search-bar border">
				<div className="w-[300px] mx-auto ">
					<div className="relative w-[300px] h-[40px]">
						<input
							type="text"
							class="input"
							placeholder="search..."
							className="text-[#8b7d77] border-0 absolute w-full h-full text-lg px-5 py-2.5 rounded-[3px] left-0 top-0"
						/>
						<div className="bg-slate-700 absolute w-[60px] h-full z-[1] cursor-pointer right-0 top-0">
							<i className="fas fa-search absolute  -translate-x-2/4 -translate-y-2/4 text-white text-[20px] left-2/4 top-2/4"></i>
						</div>
					</div>
				</div>
			</div>
			<button onClick={onclickHandler}>
				<img src="./images/profile-icon.png" alt="profile" className="w-12" />
			</button>
			<div className={`absolute w-[100%] h-[100vh] top-0 left-0 ${modal}`} id="modal">
				<div className={`absolute top-[60px] right-[60px] w-[160px] h-[200px] bg-white rounded p-3 `}>
					<p className="text-xl text-font font-bold p-2">Ashutosh Verma</p>
					<hr className="w-[100%]"></hr>
					<ul className="text-lg text-font">
						<li className="p-2 pl-3 mb-2">
							<a href="/">
								<FontAwesomeIcon icon="fa-solid fa-user" className="pr-2" />
								Profile
							</a>
						</li>
						<li className="p-2 pl-3 mb-2">
							<a href="/">
								<FontAwesomeIcon icon=" fa-envelope" className="pr-2" />
								Inbox
							</a>
						</li>
						<li className="p-2 pl-3 mb-2">
							<a href="/">
								<FontAwesomeIcon icon="fa-solid fa-message" className="pr-2" />
								Chat
							</a>
						</li>
						<li className="p-2 pl-3 mb-2">
							<a href="/">
								<FontAwesomeIcon icon="fa-right-from-bracket" className="pr-2" />
								Logout
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
