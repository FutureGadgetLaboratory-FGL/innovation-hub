
import Dashboard from "./pages/Dashboard";

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import VerifyUnivAndSpoc from "./pages/VerifyUnivAndSpoc";

function App() {
  return (

 
  
    <Router>
        
        <Routes>

                  <Route exact path="/" element={<Dashboard/>}/>
                  <Route path="/verifyUnivAndSpoc" element={<VerifyUnivAndSpoc/>}/>
                  {/* <Route path="/student_leaderboards" element={<StudentLeaderboard/>}/>
                  <Route path="/university_popularity" element={<UniversityPopularity/>}/>
                  <Route path="/uploads" element={<Uploads/>}/>
                  <Route path="/university_collabs" element={<UniversityCollabs/>}/>
                  <Route path="/compete" element={<CompetitionsHome/>}/> */}

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
