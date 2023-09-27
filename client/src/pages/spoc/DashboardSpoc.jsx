import CollaborationRequest from "./CollaborationRequest";
import Collaborations from "./Collaborations";

 

function DashboardSpoc() {

	return (
		<div className="flex flex-col">
			<Collaborations/>
			<CollaborationRequest/>
			
		</div>
	);
}

export default DashboardSpoc;
