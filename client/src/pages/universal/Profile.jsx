import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSelector } from "react-redux";

function Profile(){


    const user = useSelector((state) => state.user.user);
	const myProjects = [
		{
			owner: {
				profilePhoto: "https://picsum.photos/80",
				name: "Alice Smith",
				branch: "Electrical Engineering",
				university: "Harvard University",
			},
			coverPhoto: "https://picsum.photos/1080/600",
			title: "Electricity Generation Project",
			description:
				"This project explores innovative methods for generating clean and sustainable electricity. It involves the design and testing of solar panels and wind turbines.",
			likes: [
				{
					userId: "xyz",
				},
				{
					userId: "abc",
				},
			],
		},
		{
			owner: {
				profilePhoto: "https://picsum.photos/80",
				name: "Bob Johnson",
				branch: "Mechanical Engineering",
				university: "MIT",
			},
			coverPhoto: "https://picsum.photos/1080/600",
			title: "Mechanical Design Challenge",
			description:
				"In this project, we tackle complex mechanical design challenges, such as creating efficient gears and mechanisms for industrial applications.",
			likes: [
				{
					userId: "def",
				},
				{
					userId: "ghi",
				},
			],
		},
		{
			owner: {
				profilePhoto: "https://picsum.photos/80",
				name: "Eva Brown",
				branch: "Computer Science",
				university: "Stanford University",
			},
			coverPhoto: "https://picsum.photos/1080/200",
			title: "AI Chatbot Development",
			description:
				"Our team is working on creating an advanced AI chatbot using natural language processing and machine learning techniques. Stay tuned for updates!",
			likes: [
				{
					userId: "jkl",
				},
			],
		},
	];
    const [imageHeight, setImageHeight] = useState(200);

  const handleImageLoad = (e) => {
    // Get the height of the loaded image
    const height = e.target.height;
    setImageHeight(height);
  };

    return( 
      
        <div className="w-full min-h-screen border rounded-md shadow-sm">
           
            <div className="relative flex flex-col w-full h-[350px]">
                <img className="absolute rounded-t-md w-full min-h-[224px]" src={user.bannerPhoto} onLoad={handleImageLoad}
                 alt="not available" />
                <img src={user.profilePhoto} className={`outline outline-8 outline-white absolute z-20 mx-2 top-[65%] hover:outline-blue-100 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-black`}/>
                <div className="flex absolute right-0 m-3 p-2 top-[65%] rounded-full text-2xl hover:bg-blue-100">
                    <FontAwesomeIcon icon="fa-pencil"/>
                </div>
                <div className="absolute flex flex-col justify-center top-[65%] left-[220px] mx-2 my-1 p-2">
                    <h1 className="font-semibold  text-2xl">{user.name}
                    <span className="mx-3 px-2 py-1 text-sm font-normal rounded-xl bg-green-300">{user.role}</span></h1>
                    <h1 className=" text-lg">{user.university}</h1>
                </div>
            </div>



			
            <div className="w-full">
                    new div
            </div>
             
        </div>
    ) 
}

export default Profile;