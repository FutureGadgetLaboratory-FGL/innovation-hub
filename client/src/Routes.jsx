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
import MainStudentPage from "./pages/student/MainStudentPage";
import DashboardSpoc from "./pages/spoc/DashboardSpoc";
import VerifyStudent from "./pages/spoc/VerifyStudent";
import MainSpocPage from "./pages/universal/RootPage";
import Error from "./pages/universal/Error";
import Home from "./pages/universal/Home";
import UniveAndSpocRequests from "./pages/superAdmin/UnivAndSpocRequests";
import Profile from "./pages/universal/Profile";
import UploadRequest from "./components/spoc/UploadRequest";
import SigninSpoc from "./pages/spoc/SigninSpoc";
import DashboardStudent from "./pages/student/DashboardStudent";
import Uploads from "./pages/student/Uploads";
import ProjectFeed from "./components/universal/ProjectFeed";
import UploadProject from "./components/student/UploadProject";
import CollabHome from "./pages/student/CollabHome";
import CompetitionsHome from "./pages/student/CompetitionsHome";
import MainSuperAdminPage from "./pages/superAdmin/MainSuperAdminPage";
import DashboardSuperAdmin from "./pages/superAdmin/DashboardSuperAdmin";

const router = createBrowserRouter([
	{ path: "/", element: <Home />, errorElement: <Error />, },

	// -------------Routes for SPOC-----------------
	{ path: "/spoc/signin", element: <SigninSpoc role="spoc" /> },
	{ path: "/spoc/signup", element: <SignupSPOC role="spoc" /> },
	{
		path: "/spoc/",
		element: <MainSpocPage />,
		children: [
			{ path: "dashboard", element: <DashboardSpoc /> },
			{ path: "upload-requests", element: <VerifyProjectUploads /> },
			{ path: "request", element: <UploadRequest /> },
			{ path: "collaboration-request", element: <CollaborationRequest /> },
			{ path: "verify-student", element: <VerifyStudent /> },
			{ path: "assign-admin", element: <AssignAdmin /> },
			{ path: "profile", element: <Profile /> },
			{ path: "settings", element: <></> },
		],
	},

	// -------------Routes for Student---------------
	{ path: "/student/signin", element: <Signin role="student" /> },
	{ path: "/student/signup", element: <SignupStudent role="student" /> },
	{
		path: "/student/", 
		element: <MainStudentPage />, 
		children: [
		{ path: "dashboard", element: <DashboardStudent/> },
		{ path: "upload-project", element: <UploadProject/> },
		{ path: "browse-projects", element: <ProjectFeed/>},
		{ path: "collaborations", element: <CollabHome/>},
		{ path: "contests", element: <CompetitionsHome/>}
		], 
	},

	// -------------Routes for UAdmin----------------
	{ path: "/uadmin/signin", element: <Signin role="uAdmin" /> },
	{ path: "/uadmin/signup", element: <SignupUAdmin role="uAdmin" /> },

	// -------------Routes for Recruiter-------------
	{ path: "/recruiter/signin", element: <Signin role="recruiter" /> },
	{ path: "/recruiter/signup", element: <SignupRecruiter role="recruiter" /> },

	// -------------Routes for Super Admin-----------
	{ path: "/superadmin/signin", element: <Signin role="superAdmin" /> },
	{ path: "/superadmin/signup", element: <SignupSuperAdmin role="superAdmin" /> },

	// { path: "/verify-spoc-and-univ", element: <UniveAndSpocRequests /> }
	{path: "/superadmin/", element:<MainSuperAdminPage/>,
	children: [
		{path: "dashboard", element:<DashboardSuperAdmin/>},
		{path: "verify-spoc-and-univ", element:<UniveAndSpocRequests/>},
	],
},
]);

export default router;
