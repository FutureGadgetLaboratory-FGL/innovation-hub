import { createBrowserRouter } from "react-router-dom";

import CollaborationRequest from "./pages/spoc/CollaborationRequest";
import RegisterInstitute from "./pages/universal/RegisterInstitute";
import MainStudentPage from "./pages/student/MainStudentPage";
import LoginStudent from "./pages/student/LoginStudent";
import DashboardSpoc from "./pages/spoc/DashboardSpoc";
import VerifyStudent from "./pages/spoc/VerifyStudent";
import MainSpocPage from "./pages/spoc/MainSpocPage";
import LoginSpoc from "./pages/spoc/LoginSpoc";
import Home from "./pages/universal/Home";

const router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{ path: "/register-institute", element: <RegisterInstitute /> },

	// -------------Routes for SPOC-----------------
	{ path: "/spoc/login", element: <LoginSpoc /> },
	{
		path: "/spoc/page",
		element: <MainSpocPage />,
		children: [
			{ path: "/spoc/page/dashboard", element: <DashboardSpoc /> },
			{ path: "/spoc/page/upload-requtest", element: <></> },
			{ path: "/spoc/page/collaboration-requtest", element: <CollaborationRequest /> },
			{ path: "/spoc/page/verify-student", element: <VerifyStudent /> },
			{ path: "/spoc/page/assign-admin", element: <></> },
			{ path: "/spoc/page/profile", element: <></> },
			{ path: "/spoc/page/settings", element: <></> },
		],
	},

	// -------------Routes for Student---------------
	{ path: "/student/login", element: <LoginStudent /> },
	{ path: "/student/page", element: <MainStudentPage />, children: [{ path: "", element: <></> }] },
]);

export default router;