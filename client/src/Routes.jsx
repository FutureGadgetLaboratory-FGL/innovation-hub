import { createBrowserRouter } from "react-router-dom";

import Signin from "./pages/universal/Signin";
import SignupStudent from "./pages/student/SignupStudent";
import SignupUAdmin from "./pages/uAdmin/SignupUAdmin";
import SignupSPOC from "./pages/spoc/SignupSpoc";
import SignupRecruiter from "./pages/recruiter/SignupRecruiter";
import SignupSuperAdmin from "./pages/superAdmin/SignupSuperAdmin";
import AssignAdmin from "./pages/spoc/AssignAdmin";
import CollaborationRequest from "./pages/spoc/CollaborationRequest";
import VerifyProjectUploads from "./pages/spoc/VerifyProjectUploads";
import RegisterUniversity from "./pages/universal/RegisterUniversity";
import MainStudentPage from "./pages/student/MainStudentPage";
import DashboardSpoc from "./pages/spoc/DashboardSpoc";
import VerifyStudent from "./pages/spoc/VerifyStudent";
import MainSpocPage from "./pages/universal/RootPage";
import ProfileSpoc from "./pages/spoc/ProfileSpoc";
import Error from "./pages/universal/Error";
import Home from "./pages/universal/Home";

const router = createBrowserRouter([
	{ path: "/", element: <Home />, errorElement: <Error/>, },
	{ path: "/university/register", element: <RegisterUniversity /> },

	// -------------Routes for SPOC-----------------
	{ path: "/spoc/signin", element: <Signin role="spoc" /> },
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
	{ path: "/student/signin", element: <Signin role="student" /> },
	{ path: "/student/signup", element: <SignupStudent /> },
	{ path: "/student/page", element: <MainStudentPage />, children: [{ path: "", element: <></> }] },

	// -------------Routes for UAdmin----------------
	{ path: "/uadmin/signin", element: <Signin role="uAdmin" /> },
	{ path: "/uadmin/signup", element: <SignupUAdmin /> },

	// -------------Routes for Recruiter-------------
	{ path: "/recruiter/signin", element: <Signin role="superAdmin" /> },
	{ path: "/recruiter/signup", element: <SignupRecruiter /> },
	
	// -------------Routes for Super Admin-----------
	{ path: "/superadmin/signin", element: <Signin role="recruiter" /> },
	{ path: "/superadmin/signup", element: <SignupSuperAdmin /> },
]);

export default router;
