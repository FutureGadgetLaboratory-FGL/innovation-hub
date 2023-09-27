import { createBrowserRouter } from "react-router-dom";

import CollaborationRequest from "./pages/spoc/CollaborationRequest";
import VerifyProjectUploads from "./pages/spoc/VerifyProjectUploads";
import RegisterInstitute from "./pages/universal/RegisterInstitute";
import MainStudentPage from "./pages/student/MainStudentPage";
import LoginStudent from "./pages/student/LoginStudent";
import DashboardSpoc from "./pages/spoc/DashboardSpoc";
import VerifyStudent from "./pages/spoc/VerifyStudent";
import MainSpocPage from "./pages/universal/RootPage";
import ProfileSpoc from "./pages/spoc/ProfileSpoc";
import AssignAdmin from "./pages/spoc/AssignAdmin";
import LoginSpoc from "./pages/spoc/LoginSpoc";
import Error from "./pages/universal/Error";
import Home from "./pages/universal/Home";

const router = createBrowserRouter([
	{ path: "/", element: <Home />, errorElement: <Error/>, },
	{ path: "/register-institute", element: <RegisterInstitute /> },

	// -------------Routes for SPOC-----------------
	{ path: "/spoc/login", element: <LoginSpoc /> },
	{
		path: "/spoc/page",
		element: <MainSpocPage />,
		children: [
			{ path: "dashboard", element: <DashboardSpoc /> },
			{ path: "upload-requests", element: <VerifyProjectUploads /> },
			{ path: "collaboration-requtest", element: <CollaborationRequest /> },
			{ path: "verify-student", element: <VerifyStudent /> },
			{ path: "assign-admin", element: <AssignAdmin /> },
			{ path: "profile", element: <ProfileSpoc /> },
			{ path: "settings", element: <></> },
		],
	},

	// -------------Routes for Student---------------
	{ path: "/student/login", element: <LoginStudent /> },
	{ path: "/student/page", element: <MainStudentPage />, children: [{ path: "", element: <></> }] },
]);

export default router;
