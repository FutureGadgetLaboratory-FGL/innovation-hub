import CompetitionsHome from "./pages/CompetitionsHome";
import Dashboard from "./pages/Dashboard";
import StudentLeaderboard from "./pages/StudentLeaderboards";
import UniversityCollabs from "./pages/UniversityCollabs";
import UniversityPopularity from "./pages/UniversityPopularity";
import Uploads from "./pages/Uploads";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (

 
  
    <Router>
        
        <Routes>

                  <Route exact path="/" element={<Dashboard/>}/>
                  <Route path="/student_leaderboards" element={<StudentLeaderboard/>}/>
                  <Route path="/university_popularity" element={<UniversityPopularity/>}/>
                  <Route path="/uploads" element={<Uploads/>}/>
                  <Route path="/university_collabs" element={<UniversityCollabs/>}/>
                  <Route path="/compete" element={<CompetitionsHome/>}/>

        </Routes>
      
    </Router>
    
   
    //<Dashboard/>
    //<StudentLeaderboard/>
    //<UniversityPopularity/>
    //<UniversityUploads/>
    //<UniversityCollabs/>
  );
}

export default App;
