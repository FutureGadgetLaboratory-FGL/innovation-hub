import {Link} from 'react-router-dom';
function ViewAllUploads() {
    return (
			<div className="bg-white flex justify-between flex-col  p-3  rounded-xl shadow-[rgba(0,0,0,0.1)_0px_15px_20px_0px,rgba(0,0,0,0.04)_0px_10px_10px_-5px]">
				<h2 className="text-[16px] font-semibold">All Uploaded Projects</h2>
				<div className="flex gap-3 pr-8">
					<p className="py-3 pr-5 text-sm mb-3">
						View all your Uploaded Projects at one place. Click View to redirect to the page containing a list
						of your projects.
					</p>
					<img className="w-1/5 " src="/images/projects.png" alt="" />
				</div>

				<Link className="w-fit" to="all-uploads">
					<button className="active:scale-95  mb-1 px-4 py-2 font-semibold text-[12px] bg-primary text-white rounded-md">
						View Uploads
					</button>
				</Link>
			</div>
		);
}

export default ViewAllUploads;