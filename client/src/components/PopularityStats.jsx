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
    return(
          
                <div className="app p-4 w-full h-fit outline outline-1 rounded-md m-2">
                    <h1 className="text-2xl font-semibold mb-4">University Popularity Statistics</h1>

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
                    <div className="mt-4">
                        <p className="text-lg font-semibold">Average Popularity:</p>
                        <p>{averagePopularity.toFixed(2)}%</p>
                       
                        <div className="w-full h-fit bg-slate-300 rounded outline outline-1">
                            <div className=" h-8 bg-primary-light rounded"
                            style={{width: `${averagePopularity}%`}}>
                            </div>
                        </div>
                    </div>
                    <Link to="/university_popularity">
                    <button className="float-right active:scale-95 w-fit mt-2 px-4 py-2 font-semibold text-sm bg-primary hover:bg-primary-light text-white rounded-md shadow-sm">View Details</button>
                    </Link>
                </div>
          
        
        
    );
}

export default PopularityStats;
