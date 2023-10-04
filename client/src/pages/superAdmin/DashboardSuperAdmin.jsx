import ProfitLoss from "../../components/superAdmin/ProfitLoss";
import RecruiterReq from "../../components/superAdmin/RecruiterReq";
import Revenue from "../../components/superAdmin/Revenue";
import UnivAndSpocReq from "../../components/superAdmin/UnivAndSpocReq";

function DashboardSuperAdmin() {
    return(
        <div className="flex flex-col gap-2 w-full">

            <div className="w-full flex gap-2">
                <UnivAndSpocReq/>
                <RecruiterReq/>
                
            </div>
            <div className="w-full flex gap-2">
            <div className="flex flex-col border w-1/2 border-black shadow-md rounded-md m-1 px-2">
                    <h1 className="text-xl font-semibold m-1 p-2">SIH Bit Collection:</h1>
                    <div className="flex gap-2 mx-1 my-2">
                        <Revenue/>
                        <ProfitLoss/>
                    </div>
            </div>
            <div className="flex flex-col w-1/2 border border-black shadow-md rounded-md m-1 px-2">
                    <h1 className="text-xl font-semibold m-1 p-2">Real Money Collection:</h1>
                    <div className="flex gap-2 mx-1 my-2">
                        <Revenue/>
                        <ProfitLoss/>
                    </div>
                </div>
            </div>    

        </div>
    )
}

export default DashboardSuperAdmin;