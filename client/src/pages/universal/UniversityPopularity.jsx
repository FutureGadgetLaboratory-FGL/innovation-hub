

function UniversityPopularity() {
  const UniversityPopularityStats = ({ universityName, popularity }) => {
    return (
      <div>
        <h2 className="font-semibold">{universityName}</h2>
        <p>Popularity: {popularity}</p>
        <hr className="mt-1" />
        {/* You can add more statistics or information here */}
      </div>
    );
  };

  // Replace these values with actual data from your application
  const universityData = [
    { name: "Amity", popularity: 32 },
    { name: "Harvard", popularity: 45 },
    { name: "MIT", popularity: 60 },
  ];

  // Calculate the average popularity
  const totalPopularity = universityData.reduce(
    (accumulator, university) => accumulator + university.popularity,
    0
  );
  const averagePopularity = totalPopularity / universityData.length;
  {
    universityData.sort((a, b) => b.popularity - a.popularity);
  }
  return (
    <div className="flex ">
			<div className="w-[83%]">
        <div className="p-4 w-[100%] min-h-screen rounded-md flex flex-wrap ">
      <h1 className="text-2xl font-semibold mb-4 w-full h-fit text-center">
        University Popularity Statistics
      </h1>

      <div className="flex flex-col w-1/2 p-2 border shadow-md overflow-y-auto h-screen rounded-md gap-4">
        {universityData.map((university, index) => (
          <UniversityPopularityStats
            key={index}
            universityName={university.name}
            popularity={university.popularity}
          />
        ))}
      </div>
      <div className="w-1/2 border shadow-md h-screen rounded-md p-4">
        <p className="text-lg font-semibold">Average Popularity:</p>
        <p>{averagePopularity.toFixed(2)}%</p>

        <div className="flex w-full h-full">
          <div className="w-1/3 h-full flex flex-col justify-evenly items-center">
            <div className=" w-fit rotate-180 h-2/3 bg-slate-300 rounded outline outline-1">
              <div
                className=" w-8 bg-primary-light rounded"
                style={{ height: `${averagePopularity}%` }}
              ></div>
            </div>
            <p>Current Month</p>
          </div>
          <div className="w-1/3 h-full flex flex-col items-center justify-evenly">
            <div className=" w-fit rotate-180 h-2/3 bg-slate-300 rounded outline outline-1">
              <div
                className=" w-8 bg-primary-light rounded"
                style={{ height: `${averagePopularity}%` }}
              ></div>
            </div>
            <p>Month T-1</p>
          </div>
          <div className="w-1/3 h-full flex flex-col  justify-evenly items-center">
            <div className=" w-fit rotate-180 h-2/3 bg-slate-300 rounded outline outline-1">
              <div
                className=" w-8 bg-primary-light rounded"
                style={{ height: `${averagePopularity}%` }}
              ></div>
            </div>
            <p>Month T-2</p>
          </div>
          
        </div>

      </div>
    </div>
      </div>
    </div>    
  );
}

export default UniversityPopularity;
