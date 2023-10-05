import { Navigate } from 'react-router-dom';
import CollaboratedProjects from "../../components/student/CollaboratedProjects";
import Competitions from "../../components/student/Competitions";
import OngoingCollaborations from "../../components/universal/OngoingCollaborations";
import PopularityStats from "../../components/universal/PopularityStats";
import ProjectFeed from "../../components/universal/ProjectFeed";
import StudentLeaderboardCard from "../../components/universal/StudentLeaderboardCard";
import TotalProjects from "../../components/universal/TotalProjects";
import UniversityScore from "../../components/universal/UniversityScore";
import { useSelector } from 'react-redux';

function DashboardStudent() {
    const user = useSelector(state => state.user.user);
    return (
        <div className="w-full flex flex-col gap-3">
            <div className="w-full flex gap-3">

                <TotalProjects />
                <OngoingCollaborations />
                <UniversityScore />

            </div>
            <div className="w-full gap-4 flex">
                <div className="flex flex-col w-full gap-4 justify-between">
                    <StudentLeaderboardCard />
                    <Competitions />
                    <CollaboratedProjects />
                </div>
                <div className="w-full">

                    <PopularityStats />
                </div>
            </div>
            <ProjectFeed />
        </div>
    )
}

export default DashboardStudent;