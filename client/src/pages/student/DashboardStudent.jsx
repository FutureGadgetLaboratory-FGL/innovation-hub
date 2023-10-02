
import CollaboratedProjects from "../../components/student/CollaboratedProjects";
import Competitions from "../../components/student/Competitions";
import OngoingCollaborations from "../../components/universal/OngoingCollaborations";
import PopularityStats from "../../components/universal/PopularityStats";
import ProjectFeed from "../../components/universal/ProjectFeed";
import StudentLeaderboardCard from "../../components/universal/StudentLeaderboardCard";
import TotalProjects from "../../components/universal/TotalProjects";
import UniversityScore from "../../components/universal/UniversityScore";

function DashboardStudent() {
    return (
        <div className="w-full flex flex-col gap-3">

            <div className="w-full flex gap-3">

                <TotalProjects/>
                <OngoingCollaborations/>
                <UniversityScore/> 

            </div>
            <div className="w-full flex">
                <div className="flex flex-col w-full gap-2">
                    <StudentLeaderboardCard/>
                    <Competitions/>
                    <CollaboratedProjects/>
                </div>
                <div className="w-full">
                    
                    <PopularityStats/>
                </div>

                
                
            </div>
            <ProjectFeed/>
        </div>
    )
}

export default DashboardStudent;