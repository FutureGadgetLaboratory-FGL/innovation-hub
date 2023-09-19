import CollaboratedProjects from "../components/CollaboratedProjects";
import PopularityStats from "../components/PopularityStats";
import ProjectFeed from "../components/ProjectFeed";
import StudentActivity from "../components/StudentActivity";
import UploadedProjects from "../components/UploadedProjects";

function Dashboard() {
    return(
        <div className="flex flex-wrap">
     <div className="flex w-full">
     <StudentActivity/>
     <UploadedProjects/>
     <CollaboratedProjects/>
     </div>
     <PopularityStats/>
     <h1 className="text-center w-full font-bold text-xl">
      Projects Feed
      <hr/>
     </h1>
     <ProjectFeed/>    
    </div>
    )
}

export default Dashboard;