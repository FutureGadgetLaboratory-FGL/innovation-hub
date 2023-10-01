import React from "react";
import UploadRequest from "../../components/spoc/UploadRequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VerifyProjectUploads = () => {
	const studentUploadReq = [
		{
			status: "verified",
			sender: {
				name: "Ashutosh Verma",
				enrollment: "A7605221058",
				gender: "M",
				profilePhoto: "https://picsum.photos/64",
				email: "abc@gmail.com",
				university: "Amity University",
				course: "Computer Science and Engineering",
				workEmail: "abc@outlook.com",
			},
			project: {
				tech: true,
				coverPhoto: "https://picsum.photos/1080/600",
				title: "Title 1",
				description:
					"This is a detailed description of the project. It involves the development of a web application aimed at enhancing user experience and efficiency.",
				methodology: "Agile",
				outcomes:
					"The project aims to achieve improved user experience and efficiency by implementing modern web technologies and practices.",
				report: "https://example.com/report.pdf",
				files: [
					{
						fileName: "abc.txt",
						link: "https://example.com/files/abc.txt",
					},
					{
						fileName: "xyz.txt",
						link: "https://example.com/files/xyz.txt",
					},
				],
				workFlow: "Scrum",
				techStack:
					"The project utilizes a technology stack including React for the front-end and Node.js for the back-end.",
				installInstructions:
					"To install the application, download the installer from the following link: https://example.com/installer.exe. Run the installer and follow the on-screen instructions.",
				conclusion:
					"The project was successfully completed within the specified time frame and achieved the desired outcomes.",
				collabGuidelines:
					"Collaborators are required to adhere to coding standards and best practices. Regular code reviews are conducted to ensure code quality.",
				readmefile:
					"For more information about the project, please refer to the README file: https://example.com/readme.md",
				likes: [
					{
						userId: "xyz",
					},
					{
						userId: "abc",
					},
				],
			},
		},
		{
			status: "verified",
			sender: {
				name: "Prashant Pal",
				enrollment: "A7605221138",
				gender: "M",
				profilePhoto: "https://picsum.photos/64",
				email: "abc@gmail.com",
				university: "Amity University",
				course: "Computer Science and Engineering",
				workEmail: "abc@outlook.com",
			},
			project: {
				tech: true,
				coverPhoto: "https://picsum.photos/1080/600",
				title: "Title 1",
				description:
					"This is a detailed description of the project. It involves the development of a web application aimed at enhancing user experience and efficiency.",
				methodology: "Agile",
				outcomes:
					"The project aims to achieve improved user experience and efficiency by implementing modern web technologies and practices.",
				report: "https://example.com/report.pdf",
				files: [
					{
						fileName: "abc.txt",
						link: "https://example.com/files/abc.txt",
					},
					{
						fileName: "xyz.txt",
						link: "https://example.com/files/xyz.txt",
					},
				],
				workFlow: "Scrum",
				techStack:
					"The project utilizes a technology stack including React for the front-end and Node.js for the back-end.",
				installInstructions:
					"To install the application, download the installer from the following link: https://example.com/installer.exe. Run the installer and follow the on-screen instructions.",
				conclusion:
					"The project was successfully completed within the specified time frame and achieved the desired outcomes.",
				collabGuidelines:
					"Collaborators are required to adhere to coding standards and best practices. Regular code reviews are conducted to ensure code quality.",
				readmefile:
					"For more information about the project, please refer to the README file: https://example.com/readme.md",
				likes: [
					{
						userId: "xyz",
					},
					{
						userId: "abc",
					},
				],
			},
		},
		{
			status: "verified",
			sender: {
				name: "Naman Chawla",
				enrollment: "A7605221092",
				gender: "M",
				profilePhoto: "https://picsum.photos/64",
				email: "abc@gmail.com",
				university: "Amity University",
				course: "Computer Science and Engineering",
				workEmail: "abc@outlook.com",
			},
			project: {
				tech: true,
				coverPhoto: "https://picsum.photos/1080/600",
				title: "Title 1",
				description:
					"This is a detailed description of the project. It involves the development of a web application aimed at enhancing user experience and efficiency.",
				methodology: "Agile",
				outcomes:
					"The project aims to achieve improved user experience and efficiency by implementing modern web technologies and practices.",
				report: "https://example.com/report.pdf",
				files: [
					{
						fileName: "abc.txt",
						link: "https://example.com/files/abc.txt",
					},
					{
						fileName: "xyz.txt",
						link: "https://example.com/files/xyz.txt",
					},
				],
				workFlow: "Scrum",
				techStack:
					"The project utilizes a technology stack including React for the front-end and Node.js for the back-end.",
				installInstructions:
					"To install the application, download the installer from the following link: https://example.com/installer.exe. Run the installer and follow the on-screen instructions.",
				conclusion:
					"The project was successfully completed within the specified time frame and achieved the desired outcomes.",
				collabGuidelines:
					"Collaborators are required to adhere to coding standards and best practices. Regular code reviews are conducted to ensure code quality.",
				readmefile:
					"For more information about the project, please refer to the README file: https://example.com/readme.md",
				likes: [
					{
						userId: "xyz",
					},
					{
						userId: "abc",
					},
				],
			},
		},
		{
			status: "verified",
			sender: {
				name: "Pradeep Kumar",
				enrollment: "A7605221056",
				gender: "M",
				profilePhoto: "https://picsum.photos/64",
				email: "abc@gmail.com",
				university: "Amity University",
				course: "Computer Science and Engineering",
				workEmail: "abc@outlook.com",
			},
			project: {
				tech: true,
				coverPhoto: "https://picsum.photos/1080/600",
				title: "Title 1",
				description:
					"This is a detailed description of the project. It involves the development of a web application aimed at enhancing user experience and efficiency.",
				methodology: "Agile",
				outcomes:
					"The project aims to achieve improved user experience and efficiency by implementing modern web technologies and practices.",
				report: "https://example.com/report.pdf",
				files: [
					{
						fileName: "abc.txt",
						link: "https://example.com/files/abc.txt",
					},
					{
						fileName: "xyz.txt",
						link: "https://example.com/files/xyz.txt",
					},
				],
				workFlow: "Scrum",
				techStack:
					"The project utilizes a technology stack including React for the front-end and Node.js for the back-end.",
				installInstructions:
					"To install the application, download the installer from the following link: https://example.com/installer.exe. Run the installer and follow the on-screen instructions.",
				conclusion:
					"The project was successfully completed within the specified time frame and achieved the desired outcomes.",
				collabGuidelines:
					"Collaborators are required to adhere to coding standards and best practices. Regular code reviews are conducted to ensure code quality.",
				readmefile:
					"For more information about the project, please refer to the README file: https://example.com/readme.md",
				likes: [
					{
						userId: "xyz",
					},
					{
						userId: "abc",
					},
				],
			},
		},
	];

	return (
		<div className="w-full">
			<p className="mb-3 text-2xl font-semibold text-slate-700">Upload Requests</p>
			<div className="p-2 px-4">
				<table className="overflow-hidden border shadow-md  w-full rounded-xl ">
					<thead className="bg-slate-300">
						<tr>
							<th className="p-2 text-left text-lg font-semibold border w-[5%]">S.No.</th>
							<th className="p-2 text-left text-lg font-semibold border w-[30%]">Student Name</th>
							<th className="p-2 text-left text-lg font-semibold border  w-[20%]">Enrollment No.</th>
							<th className="p-2 text-left text-lg font-semibold border w-[40%]">Project Title</th>
							<th className="p-2 text-left text-lg font-semibold border w-[5%]"></th>
						</tr>
					</thead>
					<tbody>
						{studentUploadReq.map((item, index) => {
							return (
								<tr key={index} className={index % 2 === 0 ? "cursor-pointer" : "cursor-pointer bg-purple-100"}>
									<td className="border text-left p-2 w-[5%]">{index + 1}</td>
									<td className="border text-left p-2 w-[30%]">{item.sender.name}</td>
									<td className="border text-left p-2 w-[20%]">{item.sender.enrollment}</td>
									<td className="border text-left p-2 w-[40%]">
										{item.project.title}
									</td>
									<td className="border-b text-center w-[5%]">
										<FontAwesomeIcon
											icon="fa-solid fa-chevron-right"
											className="hover:translate-x-1 w-full"
										/>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default VerifyProjectUploads;
