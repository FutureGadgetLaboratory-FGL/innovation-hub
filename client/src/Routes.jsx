import { createBrowserRouter } from "react-router-dom";

import RootPage from "./pages/universal/RootPage";
import Signin from "./pages/universal/Signin";
import SignupStudent from "./pages/student/SignupStudent";
import SignupUAdmin from "./pages/uAdmin/SignupUAdmin";
import SignupSPOC from "./pages/spoc/SignupSpoc";
import SignupRecruiter from "./pages/recruiter/SignupRecruiter";
import SignupSuperAdmin from "./pages/superAdmin/SignupSuperAdmin";
import AssignAdmin from "./pages/spoc/AssignAdmin";
import CollaborationRequest from "./pages/spoc/CollaborationRequest";
import VerifyProjectUploads from "./pages/spoc/VerifyProjectUploads";
import DashboardSpoc from "./pages/spoc/DashboardSpoc";
import DashboardUAdmin from "./pages/uAdmin/DashboardUAdmin";
import VerifyStudent from "./pages/spoc/VerifyStudent";
import Error from "./pages/universal/Error";
import Home from "./pages/universal/Home";
import UniveAndSpocRequests from "./pages/superAdmin/UnivAndSpocRequests";
import Profile from "./pages/universal/Profile";
import UploadRequest from "./components/spoc/UploadRequest";
import DashboardStudent from "./pages/student/DashboardStudent";
import ProjectFeed from "./components/universal/ProjectFeed";
import UploadProject from "./components/student/UploadProject";
import CollabHome from "./pages/student/CollabHome";
import CompetitionsHome from "./pages/student/CompetitionsHome";
import DashboardSuperAdmin from "./pages/superAdmin/DashboardSuperAdmin";
import PreVerification from "./pages/universal/PreVerification";

const router = createBrowserRouter([
	{ path: "/", element: <Home />, errorElement: <Error />, },
	{ path: "/pre-verification", element: <PreVerification /> },

	// -------------Routes for SPOC-----------------
	{ path: "/spoc/signin", element: <Signin role="spoc" /> },
	{ path: "/spoc/signup", element: <SignupSPOC role="spoc" /> },
	{
		path: "/spoc/",
		element: <RootPage />,
		children: [
			{ path: "dashboard", element: <DashboardSpoc /> },
			{ path: "upload-requests", element: <VerifyProjectUploads /> },
			{ path: "upload-requests/:projectId", element: <UploadRequest /> },
			{ path: "request", element: <UploadRequest /> },
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
		children: [
			{ path: "dashboard", element: <DashboardStudent /> },
			{ path: "upload-project", element: <UploadProject /> },
			{ path: "browse-projects", element: <ProjectFeed /> },
			{ path: "collaborations", element: <CollabHome /> },
			{ path: "contests", element: <CompetitionsHome /> }
		],
	},

	// -------------Routes for UAdmin----------------
	{ path: "/uadmin/signin", element: <Signin role="uAdmin" /> },
	{ path: "/uadmin/signup", element: <SignupUAdmin role="uAdmin" /> },
	{
		path: "/uadmin/",
		element: <RootPage />,
		children: [
			{ path: "dashboard", element: <DashboardUAdmin /> },
		],
	},

	// -------------Routes for Recruiter-------------
	{ path: "/recruiter/signin", element: <Signin role="recruiter" /> },
	{ path: "/recruiter/signup", element: <SignupRecruiter role="recruiter" /> },

	// -------------Routes for Super Admin-----------
	{ path: "/superadmin/signin", element: <Signin role="superAdmin" /> },
	{ path: "/superadmin/signup", element: <SignupSuperAdmin role="superAdmin" /> },

	// { path: "/verify-spoc-and-univ", element: <UniveAndSpocRequests /> }
	{
		path: "/superadmin/", element: <RootPage />,
		children: [
			{ path: "dashboard", element: <DashboardSuperAdmin /> },
			{ path: "verify-spoc-and-univ", element: <UniveAndSpocRequests /> },
		],
	},
]);

export default router;
