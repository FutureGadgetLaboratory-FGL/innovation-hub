import { createBrowserRouter } from "react-router-dom";

import CollaborationRequest from "./pages/spoc/CollaborationRequest";
import VerifyProjectUploads from "./pages/spoc/VerifyProjectUploads";
import RegisterInstitute from "./pages/universal/RegisterInstitute";
import MainStudentPage from "./pages/student/MainStudentPage";
import SigninStudent from "./pages/student/SigninStudent";
import DashboardSpoc from "./pages/spoc/DashboardSpoc";
import VerifyStudent from "./pages/spoc/VerifyStudent";
import MainSpocPage from "./pages/universal/RootPage";
import ProfileSpoc from "./pages/spoc/ProfileSpoc";
import AssignAdmin from "./pages/spoc/AssignAdmin";
import SigninSpoc from "./pages/spoc/SigninSpoc";
import SignupSPOC from "./pages/spoc/SignupSpoc";
import Error from "./pages/universal/Error";
import Home from "./pages/universal/Home";

const router = createBrowserRouter([
	{ path: "/", element: <Home />, errorElement: <Error/>, },
	{ path: "/register-institute", element: <RegisterInstitute /> },

	// -------------Routes for SPOC-----------------
	{ path: "/spoc/signin", element: <SigninSpoc /> },
	{ path: "/spoc/signup", element: <SignupSPOC />},
	{
		path: "/spoc/page",
		element: <MainSpocPage />,
		children: [
			{ path: "dashboard", element: <DashboardSpoc /> },
			{ path: "upload-requests", element: <VerifyProjectUploads /> },
			{ path: "collaboration-request", element: <CollaborationRequest /> },
			{ path: "verify-student", element: <VerifyStudent /> },
			{ path: "assign-admin", element: <AssignAdmin /> },
			{ path: "profile", element: <ProfileSpoc /> },
			{ path: "settings", element: <></> },
		],
	},

	// -------------Routes for Student---------------
	{ path: "/student/signin", element: <SigninStudent /> },
	{ path: "/student/page", element: <MainStudentPage />, children: [{ path: "", element: <></> }] },
]);

export default router;
