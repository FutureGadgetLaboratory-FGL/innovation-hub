import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProfitLoss() {

    return (
        <div className="border border-black rounded-md m-1 px-3 bg-zinc-200 w-1/2">
            <div className="flex flex-col">
                <h1 className="font-semibold text-xl m-2 p-2">Profit/Loss</h1>
                <div className="flex ">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-trend-up" className="text-3xl m-2" style={{ color: "#30c737", }} />
                    <p style={{ color: "#30c737" }} className="text-lg m-2">Net SIH Bits Gained:  420</p>
                </div>
                <div className="flex ">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-trend-down" className="text-3xl m-2" style={{ color: "#b83c23", }} />
                    <p style={{ color: "#b83c23" }} className="text-lg m-2">Net SIH Bits Lost:  0</p>
                </div>

            </div>
        </div>
    )
}

export default ProfitLoss;