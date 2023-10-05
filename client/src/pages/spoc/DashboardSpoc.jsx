import StudentLeaderboardCard from "../../components/universal/StudentLeaderboardCard";
import OngoingCollaborations from "../../components/universal/OngoingCollaborations";
import ViewAllCollaborations from "../../components/spoc/ViewAllCollaborations";
import EnrolledStudents from "../../components/universal/EnrolledStudents";
import PopularityStats from "../../components/universal/PopularityStats";
import UniversityScore from "../../components/universal/UniversityScore";
import TotalProjects from "../../components/universal/TotalProjects";
import ViewAllUploads from "../../components/spoc/ViewAllUploads";
import ProjectFeed from "../../components/universal/ProjectFeed";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function DashboardSpoc() {
	const user = useSelector((state) => state.user.user);
	return (
		<div className="flex flex-col gap-3">
			{user.status === "pending" ? (
				<Navigate to="/pre-verification" />
			) : (
				<>
					<div className="flex gap-3">
						<EnrolledStudents />
						<TotalProjects />
						<OngoingCollaborations />
						<UniversityScore />
					</div>
					<div className="flex gap-3">
						<div className="w-1/2 flex flex-col gap-4">
							<ViewAllUploads />
							<StudentLeaderboardCard />
						</div>
						<div className="w-1/2 flex gap-3">
							<PopularityStats />
							<ViewAllCollaborations />
						</div>
					</div>
					<ProjectFeed />
				</>
			)}
		</div>
	);
}

export default DashboardSpoc;
