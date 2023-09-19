import Dashboard from "./pages/Dashboard";
import StudentLeaderboard from "./pages/StudentLeaderboards";
import UniversityCollabs from "./pages/UniversityCollabs";
import UniversityPopularity from "./pages/UniversityPopularity";
import UniversityUploads from "./pages/UniversityUploads";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (

 
  
    <Router>
        
        <Routes>

                  <Route exact path="/" element={<Dashboard/>}/>
                  <Route path="/student_leaderboards" element={<StudentLeaderboard/>}/>
                  <Route path="/university_popularity" element={<UniversityPopularity/>}/>
                  <Route path="/university_uploads" element={<UniversityUploads/>}/>
                  <Route path="/university_collabs" element={<UniversityCollabs/>}/>

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
