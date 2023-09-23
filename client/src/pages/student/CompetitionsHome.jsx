import {Link} from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import Nav from '../components/nav/Nav';
function CompetitionsHome() {
    return(
        <div className="flex ">
			<Sidebar />
			<div className="w-[83%]">
				<Nav />
                <div className="h-screen w-full text-center flex flex-col items-center justify-center text-lg text-opacity-75">
                Coming soon! Stay tuned!
                <Link to="/">
                <button className="active:scale-95 mt-2 w-fit px-4 py-2 border border-black font-semibold text-sm bg-primary hover:bg-primary-light text-white rounded-md shadow-sm">
                    Back to Dashboard
                </button>
                </Link>
        </div>
                </div>
                </div>
    )
}
export default CompetitionsHome;