import {Link} from 'react-router-dom';
function UploadedProjects() {
    return (
			<div className="bg-white flex justify-between flex-col m-3 p-3 w-1/3 rounded-xl shadow-[rgba(0,0,0,0.1)_0px_15px_20px_0px,rgba(0,0,0,0.04)_0px_10px_10px_-5px]">
				<h2 className="text-[16px] font-semibold">Uploaded Projects</h2>

				<div className="mt-2 mb-3 text-[12px] font-normal">
					View all your Uploaded Projects at one place. Click View to redirect to the page containing a list
					of your projects.
				</div>

				<Link to="/university_uploads">
					<button className="active:scale-95  mb-1 px-4 py-2 font-semibold text-[12px] bg-primary text-white rounded-md">
						View Uploads
					</button>
				</Link>
			</div>
		);
}

export default UploadedProjects;