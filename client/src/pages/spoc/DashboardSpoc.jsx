import StudentLeaderboardCard from "../../components/universal/StudentLeaderboardCard";
import OngoingCollaborations from "../../components/universal/OngoingCollaborations";
import ViewAllCollaborations from "../../components/spoc/ViewAllCollaborations";
import EnrolledStudents from "../../components/universal/EnrolledStudents";
import PopularityStats from "../../components/universal/PopularityStats";
import UniversityScore from "../../components/universal/UniversityScore";
import TotalProjects from "../../components/universal/TotalProjects";
import ViewAllUploads from "../../components/spoc/ViewAllUploads";
import ProjectFeed from "../../components/universal/ProjectFeed";

function DashboardSpoc() {
	return (
		<div className="flex flex-col">
			<div className="flex gap-3">
				<EnrolledStudents />
				<TotalProjects />
				<OngoingCollaborations />
				<UniversityScore />
			</div>
			<div className="flex mt-3 pl-3">
				<div className="w-1/2 flex flex-col gap-1">
					<ViewAllUploads />
					<StudentLeaderboardCard />
				</div>
				<div className="w-1/2 flex  gap-1">
					<PopularityStats />
					<ViewAllCollaborations />
				</div>
			</div>
			<ProjectFeed />
		</div>
	);
}

export default DashboardSpoc;
