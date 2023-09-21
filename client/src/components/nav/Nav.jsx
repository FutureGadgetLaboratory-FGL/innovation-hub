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
		<nav className="w-[100%] h-[60px] bg-background flex justify-between pl-9 rounded-lg pr-20  items-center">
			<div className="search-bar border rounded-lg">
				<div className="w-[300px] mx-auto ">
					<div className="relative w-[300px] h-[35px]">
						<input
							type="text"
							class="input"
							placeholder="search..."
							className="text-[#8b7d77] rounded-lg border-0 absolute w-full h-full text-sm p-3 left-0 top-0"
						/>
						<div className="bg-slate-700 absolute w-[60px] h-full z-[1] cursor-pointer  right-0 top-0">
							<FontAwesomeIcon
								icon="fas fa-search"
								className="absolute   -translate-x-2/4 -translate-y-2/4 text-white text-[16px] left-2/4 top-2/4"
							/>
						</div>
					</div>
				</div>
			</div>
			<button onClick={onclickHandler}>
				<img src="./images/profile-icon.png" alt="profile" className="w-10" />
			</button>
			<div className={`absolute w-[100%] h-[100vh] top-0 left-0 z-999 ${modal}`} id="modal">
				<div className={`absolute top-[60px] right-[80px] w-[160px] h-[200px] bg-slate-200 rounded p-2 `}>
					<p className="text-sm text-font font-bold p-2">Ashutosh Verma</p>
					<hr className="w-[100%] mb-1"></hr>
					<ul className="text-sm text-font">
						<li className="pt-1 pl-3 mb-2">
							<a href="/">
								<FontAwesomeIcon icon="fa-solid fa-user" className="pr-2" />
								Profile
							</a>
						</li>
						<li className="pt-1 pl-3 mb-2">
							<a href="/">
								<FontAwesomeIcon icon=" fa-envelope" className="pr-2" />
								Inbox
							</a>
						</li>
						<li className="pt-1 pl-3 mb-2">
							<a href="/">
								<FontAwesomeIcon icon="fa-solid fa-message" className="pr-2" />
								Chat
							</a>
						</li>
						<li className="pt-1 pl-3 mb-2">
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
