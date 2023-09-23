import { RouterProvider } from "react-router-dom";
import router from "./Routes";

// import Login from "./pages/student/Login";
// import Signup from "./pages/student/Signup";
// import Dashboard from "./pages/universal/Dashboard";
// // import UploadProject from "./pages/UploadProjectPage";
// import StudentLeaderboard from "./pages/spoc/StudentLeaderboards";
// import Uploads from "./pages/student/Uploads";
// import UniversityCollabs from "./pages/spoc/UniversityCollabs";
// import UniversityPopularity from "./pages/universal/UniversityPopularity";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
// import SpocCollabRequests from "./pages/spoc/SpocCollabRequest";
// import VerifyStudent from "./pages/spoc/VerifyStudent";
// import CompetitionsHome from "./pages/student/CompetitionsHome";
// import UploadProjectPage from "./pages/student/UploadProjectPage";
// library.add(fas, faTwitter, faFontAwesome);
function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
