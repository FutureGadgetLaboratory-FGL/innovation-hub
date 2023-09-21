import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import StudentLeaderboard from "./pages/StudentLeaderboards";
import Uploads from "./pages/Uploads"
import UniversityCollabs from "./pages/UniversityCollabs";
import UniversityPopularity from "./pages/UniversityPopularity";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
library.add(fas, faTwitter, faFontAwesome);
function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/student_leaderboards" element={<StudentLeaderboard />} />
        <Route path="/university_popularity" element={<UniversityPopularity />} />
        <Route path="/university_uploads" element={<Uploads/>} />
        <Route path="/university_collabs" element={<UniversityCollabs />} />
      </Routes>
    </Router>

  );
}

export default App;

