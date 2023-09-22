import {Link} from 'react-router-dom';
function PopularityStats() {

    const UniversityPopularityStats = ({ universityName, popularity }) => {
        return (
            <div>
                <h2>{universityName}</h2>
                <p>Popularity: {popularity}</p>
                {/* You can add more statistics or information here */}
            </div>
        );
    };

    
       
            // Replace these values with actual data from your application
            const universityData = [
                { name: 'Amity', popularity: 32 },
                { name: 'Harvard', popularity: 45 },
                { name: 'MIT', popularity: 60 },
            ];
        
            // Calculate the average popularity
            const totalPopularity = universityData.reduce(
                (accumulator, university) => accumulator + university.popularity,
                0
            );
            const averagePopularity =
                totalPopularity / universityData.length;
    return (
			<div className="bg-white flex justify-between flex-col mt-3 ml-4 p-3 w-3/4 rounded-xl shadow-[rgba(0,0,0,0.1)_0px_15px_20px_0px,rgba(0,0,0,0.04)_0px_10px_10px_-5px]">
				<h1 className="text-[16px] font-semibold">University Popularity Statistics</h1>

				{/* use inside the open popularity button*/}
				{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {universityData.map((university, index) => (
                            <UniversityPopularityStats
                                key={index}
                                universityName={university.name}
                                popularity={university.popularity}
                            />
                        ))}
                    </div> */}
				<div className="mt-4 w-full">
					<p className="text-[14px] font-normal">Average Popularity:</p>
					<p className='mb-1 mt-2 font-semibold text-[12px]'>{averagePopularity.toFixed(2)}%</p>

					<div className="w-full h-fit bg-slate-300 rounded ">
						<div className=" h-5 bg-primary-light rounded" style={{ width: `${averagePopularity}%` }}></div>
					</div>
				</div>
				<Link className='w-fit' to="/university_popularity">
					<button className="active:scale-95 mt-3 mb-1 px-4 py-2 font-semibold text-[12px] bg-primary text-white rounded-md">View Details</button>
				</Link>
			</div>
		);
}

export default PopularityStats;
