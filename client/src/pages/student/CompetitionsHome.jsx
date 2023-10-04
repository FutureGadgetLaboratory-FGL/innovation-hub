import {Link} from 'react-router-dom';

function CompetitionsHome() {
    return(
       
                <div className="h-screen w-full text-center flex flex-col items-center justify-center text-lg text-opacity-75">
                Coming soon! Stay tuned!
                <Link to="/student/dashboard">
                <button className="active:scale-95 mt-2 w-fit px-4 py-2 border border-black font-semibold text-sm bg-primary hover:bg-primary-light text-white rounded-md shadow-sm">
                    Back to Dashboard
                </button>
                </Link>
        </div>
    )
}
export default CompetitionsHome;