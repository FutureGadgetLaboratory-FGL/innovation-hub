import React from "react";
import { Link } from "react-router-dom";

const ViewAllCollaborations = () => {
	return (
		<div className="bg-white flex flex-col gap-2 p-3 rounded-xl shadow-[rgba(0,0,0,0.1)_0px_15px_20px_0px,rgba(0,0,0,0.04)_0px_10px_10px_-5px]">
			<h2 className="text-[16px] font-semibold">All Ongoing Collaborations</h2>
			<div className="flex flex-col  items-center gap-4">
				<img className="w-1/2 py-3 " src="/images/collaborations.png" alt="" />
				<p className="py-3 pr-5 text-sm mb-3">
					View all your Uploaded Projects at one place. Click View to redirect to the page containing a list
					of your projects.
				</p>
			</div>

			<button className="active:scale-95 px-4 py-2 mt-auto font-semibold text-[12px] bg-primary text-white rounded-md">
				<Link className="w-fit" to="all-collaborations">
					View Uploads
				</Link>
			</button>
		</div>
	);
};

export default ViewAllCollaborations;
