import Leaderboard from "../components/leaderboard/Leaderboard";
import Sidebar from "../components/sidebar/Sidebar";
import Nav from "../components/nav/Nav";

const StudentLeaderboard = () => {
	return (
		<div className="flex ">
			<Sidebar />
			<div className="w-[83%]">
				<Nav />
				<div className="flex flex-col pr-5 pl-5 pb-5 pt-1">
					<Leaderboard />
				</div>
			</div>
		</div>
	);
};

export default StudentLeaderboard;
