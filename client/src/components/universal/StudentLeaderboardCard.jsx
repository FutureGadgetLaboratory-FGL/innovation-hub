import { Link } from "react-router-dom";

const StudentLeaderboardCard = () => {
	return (
		<div className="flex-col grow bg-white p-3  rounded-xl shadow-[rgba(0,0,0,0.1)_0px_15px_20px_0px,rgba(0,0,0,0.04)_0px_10px_10px_-5px]">
			<h3 className="text-[16px] font-semibold">Student's Leaderboard</h3>
			<div className="flex gap-3 pr-8">
				<p className="py-3 pr-5 text-sm mb-3">
					student leaderboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nam rem sed magnam, a labore.
				</p>
				<img className="w-1/5 " src="/images/leaderboard.png" alt="" />
			</div>

			<Link className="w-fit" to="stud">
				<button className="active:scale-95  mb-1 px-4 py-2 font-semibold text-[12px] bg-primary text-white rounded-md ">
					Open Leaderboard
				</button>
			</Link>
		</div>
	);
};

export default StudentLeaderboardCard;
