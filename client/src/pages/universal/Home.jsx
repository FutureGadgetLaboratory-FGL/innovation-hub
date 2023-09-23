import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
	return (
		<main className=" flex justify-center items-center w-100 h-[100vh] bg-slate-200">
			<div className="container ">
				<h1 className="p-3 mb-5 text-8xl font-bold text-center">Welcome to Student Innovation Hub</h1>
				<div className="flex gap-3 justify-center items-center flex-wrap">
					<Link
						to={"/student/login"}
						className="p-3 border-slate-700 rounded-lg bg-blue-500 text-white hover:bg-blue-600 active:scale-95"
					>
						I'm Student
					</Link>
					<Link
						to={"/spoc/login"}
						className="p-3 border-slate-700 rounded-lg bg-blue-500 text-white hover:bg-blue-600 active:scale-95"
					>
						I'm SPOC
					</Link>
					<Link
						to={"/register-institute"}
						className="p-3 border-slate-700 rounded-lg bg-blue-500 text-white hover:bg-blue-600 active:scale-95"
					>
						Register Your Institute
					</Link>
				</div>
			</div>
		</main>
	);
};

export default Home;