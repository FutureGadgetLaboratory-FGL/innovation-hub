import CollaboratedProjects from "../components/CollaboratedProjects";
import Competitions from "../components/Competitions";
import PopularityStats from "../components/PopularityStats";
import ProjectFeed from "../components/ProjectFeed";
import StudentActivity from "../components/StudentActivity";
import UploadedProjects from "../components/UploadedProjects";
import Nav from "../components/nav/Nav";
import Sidebar from "../components/sidebar/Sidebar";

function Dashboard() {
	return (
		<div className="flex ">
			<Sidebar />
			<div className="w-[83%]">
				<Nav />
				<div className="flex flex-col pr-5 pl-5 pb-5 pt-1">
					<div className="flex w-[100%]">
						<StudentActivity />
						<UploadedProjects />
						<CollaboratedProjects />
					</div>
					<PopularityStats />
					<ProjectFeed />
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
