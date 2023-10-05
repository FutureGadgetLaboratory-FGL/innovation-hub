import {Link} from 'react-router-dom';
function Competitions() {

    return(
        <div className="flex-col grow shadow-md bg-gradient-to-r p-2 from-accent-lpurple to-accent-dpurple rounded-md border border-black ">
            <h1 className="font-semibold text-white m-2">
                Competitions
            </h1>
            <p className="whitespace-normal break-words text-white p-2 m-2">
                Participate and compete in weekly or one-time competitions to earn rewards and popularity points for your university.
            </p>
            <Link to="/compete" className='w-fit'>
            <button className="active:scale-95 w-fit px-4 py-2 border border-black font-semibold text-sm bg-primary hover:bg-primary-light text-white rounded-md shadow-sm">Participate</button>
            </Link>
        </div>
    )

}

export default Competitions;