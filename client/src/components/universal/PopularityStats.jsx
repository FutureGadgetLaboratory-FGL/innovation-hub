import { Link } from "react-router-dom";

const PopularityStats = () => {
	return (
		<div className="bg-white flex flex-col gap-2 h-full p-3 rounded-xl shadow-[rgba(0,0,0,0.1)_0px_15px_20px_0px,rgba(0,0,0,0.04)_0px_10px_10px_-5px]">
			<h1 className="text-[16px] font-semibold">University Popularity Statistics</h1>
			<div className="flex flex-col  items-center gap-4">
				<img className="w-1/2 py-3 " src="/images/statistics.png" alt="" />
				<p className="py-3 pr-5 text-sm mb-3">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit est commodi cum ipsam. Libero, non.
				</p>
			</div>

			<button className="active:scale-95  px-4 py-2 font-semibold text-[12px] bg-primary text-white rounded-md">
				<Link to="university-statistics">View Details</Link>
			</button>
		</div>
	);
};

export default PopularityStats;
