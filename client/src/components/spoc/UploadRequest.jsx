import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UploadRequest() {

    const user = {
		user: {
			_id: "abcd",
			role: "SPOC",
		},
	};

    const studentUploadReq = 
    {
        status: "pending",
        sender: {
            name: "User 1",
            enrollment: "001100",
            gender: "M",
            profilePhoto: "https://picsum.photos/64",
            email: "abc@gmail.com",
            university: "Amity University",
            course: "CSE",
            workEmail: "abc@outlook.com"
        },
        project: {
            tech: true,
            coverPhoto: "https://picsum.photos/1080/600",
            title: "Title 1",
            description: "This is the description of the project",
            methodology: "Agile",
            outcomes: "Improved user experience",
            report: "https://example.com/report.pdf",
            files: [
                {
                    fileName: "abc.txt",
                    link: "https://example.com/files/abc.txt"
                },
                {
                    fileName: "xyz.txt",
                    link: "https://example.com/files/xyz.txt"
                }
            ],
            workFlow: "Scrum",
            techStack: "React, Node.js",
            installInstructions: "Download and run the installer",
            conclusion: "Project completed successfully",
            collabGuidelines: "Follow coding standards",
            readmefile: "https://example.com/readme.md"
        }
    }
    


    return(
        <div className="w-full">
				
            <div className="w-full p-2 border-2 min-h-full rounded-md shadow-md cursor-pointer">
                <div className="flex justify-between w-full p-2">
                    <div className="flex justify-center items-center gap-1">
                        <img className="border border-1 rounded-full" src={studentUploadReq.sender.profilePhoto} alt="N/A" />
                        <h1 className="text-2xl font-semibold m-2 ">{studentUploadReq.sender.name}</h1>
                    </div>
                    <h1 className="m-2 text-xl font-semibold">{studentUploadReq.sender.university}</h1>
                </div>

                <div className="w-full">
                    <div className="flex flex-wrap justify-between w-full">
                        <div className="flex flex-col w-full justify-start">
                            <div className="flex gap-2">

                               <div className="w-2/3">
                                <h3 className="m-2 font-semibold">Request Details:</h3>
                                <img
                                    className="border w-full mx-2 border-black"
                                    src={studentUploadReq.project.coverPhoto}
                                    alt="N/A"
                                    />
                               </div>
                               <div className="w-1/3">
                               <h3 className="m-2 font-semibold">Student Details:</h3>
                               <div className="flex flex-col h-fit border border-black m-2 rounded-sm">
                            
                            <ul className=" p-2">
                                <li className="p-2 m-1">Course: {studentUploadReq.sender.course}</li>
                                <li className="p-2 m-1">Enrollment Number: {studentUploadReq.sender.enrollment}</li>
                                <li className="p-2 m-1">Gender: {studentUploadReq.sender.gender}</li>
                                <li className="p-2 m-1">E-mail: {studentUploadReq.sender.email}</li>
                                <li className="m-1 p-2">Work E-mail: {studentUploadReq.sender.workEmail}</li>
                            </ul>
                            </div>
                        </div>
                            </div>
                                {
                                    studentUploadReq.project.tech===true?
                                    (
                                        <div className="m-2">
                                            <h1 className="text-3xl font-semibold text-center w-full">{studentUploadReq.project.title}</h1>
                                            <p className="font-semibold text-2xl">Description:</p>
                                            <p className="text-xl p-2">{studentUploadReq.project.description}</p>
                                            <p className="font-semibold text-2xl">Work Flow:</p>
                                            <p className="text-xl p-2">{studentUploadReq.project.workFlow}</p>
                                            <p className="font-semibold text-2xl">Tech Stack:</p>
                                            <p className="text-xl p-2">{studentUploadReq.project.techStack}</p>
                                            <p className="font-semibold text-2xl">Methodology:</p>
                                            <p className="text-xl p-2">{studentUploadReq.project.methodology}</p>
                                            <p className="font-semibold text-2xl">Install Instructions:</p>
                                            <p className="text-xl p-2">{studentUploadReq.project.installInstructions}</p>
                                            <p className="font-semibold text-2xl">Conclusion:</p>
                                            <p className="text-xl p-2">{studentUploadReq.project.conclusion}</p>
                                            <p className="font-semibold text-2xl">Collaboration Guidelines:</p>
                                            <p className="text-xl p-2">{studentUploadReq.project.collabGuidelines}</p>

                                            <div>
                                                <h3 className="font-semibold text-2xl">Attachments:</h3>
                                               
                                                <div className="flex flex-wrap gap-1 items-center justify-center">

                                                   {studentUploadReq.project.files.map((item,index)=>{
                                                           return(
                                                            <div key={index} className="rounded-md p-3 flex w-fit bg-slate-200 justify-between border border-1 shadow-sm">
                                                                <p className="mx-3">{item.fileName}</p>
                                                                <a href={item.link}><FontAwesomeIcon icon="fa-solid fa-download" /></a>
                                                            </div>
                                                           )
                                                    })}

                                                </div>
                                                
                                            </div>

                                            <div className="flex my-3 justify-between border border-1 rounded-md shadow-sm p-3 w-fit bg-slate-200">
                                                <p className="mx-3">Readme.md</p>
                                                <a href={studentUploadReq.project.readmefile}><FontAwesomeIcon icon="fa-solid fa-eye"/></a>
                                            </div>


                                        </div>
                                    ):
                                    (
                                        <div className="m-2">
                                            <h2 className="font-semibold">{studentUploadReq.project.title}</h2>
                                            <p className="font-semibold">Description:</p>
                                            <p>{studentUploadReq.project.description}</p>
                                            <p className="font-semibold">Methodology:</p>
                                            <p>{studentUploadReq.project.methodology}</p>
                                            <p className="font-semibold">Outcomes:</p>
                                            <p>{studentUploadReq.project.outcomes}</p>
                                            <p className="font-semibold">Report:</p>
                                            <p>{studentUploadReq.project.report}</p>
                                            <p className="font-semibold">Conclusion:</p>
                                            <p>{studentUploadReq.project.conclusion}</p>

                                            <div>
                                                <h3 className="font-semibold">Attachments:</h3>
                                               
                                                <div className="flex flex-wrap gap-1 items-center justify-center">

                                                   {studentUploadReq.project.files.map((item,index)=>{
                                                           return(
                                                            <div key={index} className="rounded-md p-3 flex w-fit bg-slate-300 justify-between border border-1 shadow-sm">
                                                                <p className="mx-3">{item.fileName}</p>
                                                                <a href={item.link}><FontAwesomeIcon icon="fa-solid fa-download" className="pr-3" /></a>
                                                            </div>
                                                           )
                                                    })}

                                                </div>
                                                
                                            </div>


                                        </div>
                                    )
                                }
                        </div>
                       
                    </div>

                    {
                        (user.user.role==="SPOC" && studentUploadReq.status==="pending")?
                        (
                            <div className="flex justify-center">
                             <button className="border border-black active:scale-95 w-fit m-2 px-4 py-2 font-semibold text-sm bg-accent-green hover:bg-lime-600 text-white rounded-md shadow-sm">
                            Accept
                            </button>
                            <button className="border border-black active:scale-95 w-fit m-2 px-4 py-2 font-semibold text-sm bg-accent-red hover:bg-red-600 text-white rounded-md shadow-sm">
                            Reject
                            </button>
                            </div>
                        ):(<div></div>)
                    }
                </div>
					
            </div>
        </div>
		
    )
}

export default UploadRequest;