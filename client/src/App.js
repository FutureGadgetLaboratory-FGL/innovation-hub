import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
// import UploadProject from "./pages/UploadProjectPage";
import StudentLeaderboard from "./pages/StudentLeaderboards";
import Uploads from "./pages/Uploads"
import UniversityCollabs from "./pages/UniversityCollabs";
import UniversityPopularity from "./pages/UniversityPopularity";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import SpocCollabRequests from "./pages/SpocCollabRequest";
import VerifyStudent from "./pages/VerifyStudent";
import CompetitionsHome from "./pages/CompetitionsHome";
import UploadProjectPage from "./pages/UploadProjectPage";
library.add(fas, faTwitter, faFontAwesome);
function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/student_leaderboards" element={<StudentLeaderboard />} />
        <Route path="/spoc/dashboard" element={<Dashboard />} />
        <Route path="/student/upload-project" element={<UploadProjectPage />} />
        
        <Route path="/university_popularity" element={<UniversityPopularity />} />
        <Route path="/university_uploads" element={<Uploads/>} />
        <Route path="/university_collabs" element={<UniversityCollabs />} />
        <Route path="/spoc_collab_requests" element={<SpocCollabRequests/>}/>
        <Route path="/verify_student" element={<VerifyStudent/>}/>
        <Route path="/compete" element={<CompetitionsHome/>}/>
      </Routes>
    </Router>
    // <SpocCollabRequests/>

  );
}

export default App;

