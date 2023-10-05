import {Link} from 'react-router-dom';
function CollaboratedProjects() {
    return (
			<div className="flex-col grow bg-white p-3 flex justify-between rounded-xl shadow-[rgba(0,0,0,0.1)_0px_15px_20px_0px,rgba(0,0,0,0.04)_0px_10px_10px_-5px]">
				<h2 className="text-[16px] font-semibold">Collaborated Projects</h2>

				<div className="mt-2 mb-3 text-[12px] font-normal">
					View all your Collaborated Projects at one place. Click View to redirect to the page containing a
					list of your collaborations.
				</div>

				<Link className='w-fit' to="/university_collabs">
					<button className="active:scale-95 mb-1 px-4 py-2 font-semibold text-[12px] bg-primary text-white rounded-md">
						View Collabs
					</button>
				</Link>
			</div>
		);
}

export default CollaboratedProjects;