import Nav from "../components/nav/Nav";
import Sidebar from "../components/sidebar/Sidebar";

function VerifyStudent() {

    const studentReq=[{
        name:"Naman",
        email:"xyz",
        gender:"M",
        profilePhoto:"xyz",
        university:"Amity",
        course:"CSE",
        workEmail:"abc@gmail.com",
        startYear:"2020",
        endYear:"2024",
        idCardFront:"https://picsum.photos/100/200",
        idCardBack:"https://picsum.photos/100/200",
        enrollment:"001100"
    },
    {
        name:"Rahul",
        email:"xyz",
        gender:"M",
        profilePhoto:"xyz",
        university:"Amity",
        course:"CSE",
        workEmail:"abc@gmail.com",
        startYear:"2020",
        endYear:"2024",
        idCardFront:"https://picsum.photos/100/200",
        idCardBack:"https://picsum.photos/100/200",
        enrollment:"001100"
    },
    {
        name:"Ashish",
        email:"xyz",
        gender:"M",
        profilePhoto:"xyz",
        university:"Amity",
        course:"CSE",
        workEmail:"abc@gmail.com",
        startYear:"2020",
        endYear:"2024",
        idCardFront:"https://picsum.photos/100/200",
        idCardBack:"https://picsum.photos/100/200",
        enrollment:"001100"
    },
    {
        name:"Ashutosh",
        email:"xyz",
        gender:"M",
        profilePhoto:"xyz",
        university:"Amity",
        course:"CSE",
        workEmail:"abc@gmail.com",
        startYear:"2020",
        endYear:"2024",
        idCardFront:"https://picsum.photos/100/200",
        idCardBack:"https://picsum.photos/100/200",
        enrollment:"001100"
    }
]






    return(
      <div className="flex ">
			<Sidebar />
			<div className="w-[83%]">
				<Nav/>
        <div className="w-full h-fit overflow-y-auto overflow-x-hidden flex flex-wrap justify-between p-2">
      {studentReq.map((item, index) => {
        return (
          <div
            key={index}
            className="w-1/2 p-2 border-2 min-h-full rounded-md shadow-md transition-transform ease-in-out duration-1000 cursor-pointer"
          >
            <div className="flex justify-between w-full p-2">
              <img className="border border-1 rounded-full" src={item.profilePhoto} alt="N/A"/>
              <h1 className="text-2xl font-semibold m-2 ">{item.name}</h1>
              <h1 className="m-2 text-xl font-semibold">{item.university}</h1>
            </div>

           
              <div className="w-full">
                <div className="flex flex-wrap justify-between w-full">
                <ul className=" p-2">
                  <li className="p-2 m-1">Course: {item.course}</li>
                  <li className="p-2 m-1">Enrollment Number: {item.enrollment}</li>
                  <li className="p-2 m-1">Gender: {item.gender}</li>
                  <li className="p-2 m-1">E-mail: {item.email}</li>
                  <li className="m-1 p-2">Work E-mail: {item.workEmail}</li>
                </ul>
                <div className="flex flex-col">
                        <p className="font-semibold">Id Card Images:</p>
                        <div className="flex justify-start">
                            <img className="border mx-2 border-black" src={item.idCardFront} alt="N/A"/>
                            <img className="border mx-2 border-black" src={item.idCardBack} alt="N/A"/>
                        </div>
                    </div>
                </div>
                
                    <div className="flex w-1/2">
                    <span className="mx-4">Start Year: {item.startYear}</span>
                    <span className="mx-4">End Year: {item.endYear}</span>
                    </div>
                    
               
                <div className="flex justify-center">
                      <button className="border border-black active:scale-95 w-fit m-2 px-4 py-2 font-semibold text-sm bg-accent-green hover:bg-lime-600 text-white rounded-md shadow-sm">
                        Verify
                      </button>
                      <button className="border border-black active:scale-95 w-fit m-2 px-4 py-2 font-semibold text-sm bg-accent-red hover:bg-red-600 text-white rounded-md shadow-sm">
                        Reject
                      </button>
                    </div>
                  
                
              </div>
            
          </div>
        );
      })}
      </div>
        </div>
        </div>
    )
}
export default VerifyStudent;