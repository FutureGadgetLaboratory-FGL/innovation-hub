import { Link } from 'react-router-dom';
function UnivAndSpocReq() {

    return (
        <div className="shadow-md rounded-md border border-black box-border m-1 w-1/2 p-2">
            <h1 className="font-semibold text-xl p-2">University And SPOC Requests</h1>
            <p className="break-words whitespace-normal p-2">Requests of University affiliations and SPOC appointments appears here. Verify University and SPOC requests here.</p>
            <div className="flex justify-end w-full">
                <Link to="/superadmin/verify-spoc-and-univ">
                    <button className=" border  border-black active:scale-95 w-fit m-2 px-4 py-2 font-semibold text-sm bg-primary hover:bg-primary-light text-white rounded-md shadow-sm">Verify</button>
                </Link>
            </div>
        </div>
    )
}

export default UnivAndSpocReq;