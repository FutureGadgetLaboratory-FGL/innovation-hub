import {Link} from 'react-router-dom';
function CollaboratedProjects() {
    return(
        <div className="drop-shadow-md hover:drop-shadow-xl flex flex-col container rounded-md w-1/3 outline-1 outline p-2 m-1">
            <h2 className="mx-auto font-semibold h-1/5 mt-2 w-fit">Collaborated Projects</h2>

            <div className="font-semibold text-sm h-3/5 w-full m-2 p-2">
                    View all your Collaborated Projects at one place. Click View to redirect to the page containing a list of your collaborations.
            </div>

            <Link to="/university_collabs">
            <button className="active:scale-95 w-full border border-black px-4 py-2 font-semibold text-sm bg-primary hover:bg-primary-light text-white rounded-md shadow-sm">View Collabs</button>
            </Link>
        </div>
    );
}

export default CollaboratedProjects;