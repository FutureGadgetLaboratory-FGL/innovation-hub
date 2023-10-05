import { createBrowserRouter } from "react-router-dom";

import UniveAndSpocRequests from "./pages/super-admin/UnivAndSpocRequests";
import VerifyProjectUploads from "./pages/spoc/VerifyProjectUploads";
import CollaborationRequest from "./pages/spoc/CollaborationRequest";
import SignupSuperAdmin from "./pages/superAdmin/SignupSuperAdmin";
import SignupRecruiter from "./pages/recruiter/SignupRecruiter";
import DashboardStudent from "./pages/student/DashboardStudent";
import UploadRequest from "./components/spoc/UploadRequest";
import SignupStudent from "./pages/student/SignupStudent";
import DashboardSpoc from "./pages/spoc/DashboardSpoc";
import VerifyStudent from "./pages/spoc/VerifyStudent";
import SignupUAdmin from "./pages/uAdmin/SignupUAdmin";
import MainSpocPage from "./pages/universal/RootPage";
import AssignAdmin from "./pages/spoc/AssignAdmin";
import SigninSpoc from "./pages/spoc/SigninSpoc";
import SignupSPOC from "./pages/spoc/SignupSpoc";
import Profile from "./pages/universal/Profile";
import Signin from "./pages/universal/Signin";
import Error from "./pages/universal/Error";
import Home from "./pages/universal/Home";
import RootPage from "./pages/universal/RootPage";

const router = createBrowserRouter([
	{ path: "/", element: <Home />, errorElement: <Error /> },

	// -------------Routes for SPOC-----------------
	{ path: "/spoc/signin", element: <SigninSpoc role="spoc" /> },
	{ path: "/spoc/signup", element: <SignupSPOC role="spoc" /> },
	{
		path: "/spoc/",
		element: <MainSpocPage />,
		children: [
			{ path: "collaboration-request", element: <CollaborationRequest /> },
			{ path: "upload-requests", element: <VerifyProjectUploads /> },
			{ path: "verify-student", element: <VerifyStudent /> },
			{ path: "assign-admin", element: <AssignAdmin /> },
			{ path: "dashboard", element: <DashboardSpoc /> },
			{ path: "request", element: <UploadRequest /> },
			{ path: "profile", element: <Profile /> },
			{ path: "settings", element: <></> },
		],
	},

	// -------------Routes for Student---------------
	{ path: "/student/signin", element: <Signin role="student" /> },
	{ path: "/student/signup", element: <SignupStudent role="student" /> },
	{
		path: "/student/",
		element: <RootPage />,
		children: [{ path: "dashboard", element: <DashboardStudent /> }],
	},

	// -------------Routes for UAdmin----------------
	{ path: "/uadmin/signin", element: <Signin role="uAdmin" /> },
	{ path: "/uadmin/signup", element: <SignupUAdmin role="uAdmin" /> },

	// -------------Routes for Recruiter-------------
	{ path: "/recruiter/signin", element: <Signin role="superAdmin" /> },
	{ path: "/recruiter/signup", element: <SignupRecruiter role="superAdmin" /> },

	// -------------Routes for Super Admin-----------
	{ path: "/superadmin/signin", element: <Signin role="recruiter" /> },
	{ path: "/superadmin/signup", element: <SignupSuperAdmin role="recruiter" /> },

	{ path: "/verify-spoc-and-univ", element: <UniveAndSpocRequests /> },
	// 	{path: "/super-admin/page", element:</>,
	// 	children: [
	// 		{path: "/verify-spoc-and-univ", element:<UniveAndSpocRequests/>},
	// 	],
]);

export default router;
