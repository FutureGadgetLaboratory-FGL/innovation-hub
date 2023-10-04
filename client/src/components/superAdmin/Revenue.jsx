import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Revenue(){
    return (
        <div className="border border-black rounded-md m-1 px-3 bg-zinc-200 w-1/2">
            <div className="flex flex-col">
                <h1 className="font-semibold text-xl m-2 p-2">Total Revenue</h1>
                <div className="flex">
                    <FontAwesomeIcon icon="fa-solid fa-coins" className="text-3xl m-2"/>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-up" className="text-xl m-2" style={{color: "#30c737",}} />
                    <p style={{color: "#30c737"}} className="text-lg m-2">Incoming:  817 SIH Bits</p>
                </div>
                <div className="flex">
                    <FontAwesomeIcon icon="fa-solid fa-coins" className="text-3xl m-2"/>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-down" className="text-xl m-2" style={{color: "#b83c23",}} />
                    <p style={{color: "#b83c23"}} className="text-lg m-2">Outgoing:  397 SIH Bits</p>
                </div>
                
            </div>
        </div>
    )
}

export default Revenue;