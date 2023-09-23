import { createBrowserRouter } from "react-router-dom";

import RegisterInstitute from "./pages/universal/RegisterInstitute";
import MainStudentPage from "./pages/student/MainStudentPage";
import LoginStudent from "./pages/student/LoginStudent";
import MainSpocPage from "./pages/spoc/MainSpocPage";
import LoginSpoc from "./pages/spoc/LoginSpoc";
import Home from "./pages/universal/Home";

const router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{ path: "/register-institute", element: <RegisterInstitute /> },

	// -------------Routes for SPOC-----------------
	{ path: "/spoc/login", element: <LoginSpoc /> },
	{ path: "/spoc/page", element: <MainSpocPage />, children: [{ path: "", element: <></> }] },

	// -------------Routes for Student---------------
	{ path: "/student/login", element: <LoginStudent /> },
	{ path: "/student/page", element: <MainStudentPage />, children: [{ path: "", element: <></> }] },
]);

export default router;

// <Router>
// 	<Routes>
// 		<Route exact path="/" element={<Dashboard />} />
// 		<Route path="/login" element={<Login />} />
// 		<Route path="/signup" element={<Signup />} />
// 		<Route path="/student_leaderboards" element={<StudentLeaderboard />} />
// 		<Route path="/spoc/dashboard" element={<Dashboard />} />
// 		<Route path="/student/upload-project" element={<UploadProjectPage />} />
// 		<Route path="/university_popularity" element={<UniversityPopularity />} />
// 		<Route path="/university_uploads" element={<Uploads />} />
// 		<Route path="/university_collabs" element={<UniversityCollabs />} />
// 		<Route path="/spoc_collab_requests" element={<SpocCollabRequests />} />
// 		<Route path="/verify_student" element={<VerifyStudent />} />
// 		<Route path="/compete" element={<CompetitionsHome />} />
// 	</Routes>
// </Router>
// <SpocCollabRequests/>
