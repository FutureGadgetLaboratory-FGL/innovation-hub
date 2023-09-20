import CollaboratedProjects from "../components/CollaboratedProjects";
import Competitions from "../components/Competitions";
import PopularityStats from "../components/PopularityStats";
import ProjectFeed from "../components/ProjectFeed";
import StudentActivity from "../components/StudentActivity";
import UploadedProjects from "../components/UploadedProjects";

function Dashboard() {
    return(
        <div className="flex flex-wrap">
     <div className="flex w-full">
     <Competitions/>
     <UploadedProjects/>
     <CollaboratedProjects/>
     </div>
     <div className="flex w-full">
     <StudentActivity/>
     <PopularityStats/>
     </div>
     
     <h1 className="text-center w-full font-bold text-xl">
      Projects Feed
      <hr/>
     </h1>
     <ProjectFeed/>    
    </div>
    )
}

export default Dashboard;