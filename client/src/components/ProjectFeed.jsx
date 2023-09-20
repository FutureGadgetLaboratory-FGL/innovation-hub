function ProjectFeed() {
  const projectFeed = [
    {
      owner: {
        profilePhoto: "https://example.com/owner1.jpg",
        name: "Alice Smith",
        branch: "Electrical Engineering",
        university: "Harvard University",
      },
      coverPhoto: "https://example.com/cover1.jpg",
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
        profilePhoto: "https://example.com/owner2.jpg",
        name: "Bob Johnson",
        branch: "Mechanical Engineering",
        university: "MIT",
      },
      coverPhoto: "https://example.com/cover2.jpg",
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
        profilePhoto: "https://example.com/owner3.jpg",
        name: "Eva Brown",
        branch: "Computer Science",
        university: "Stanford University",
      },
      coverPhoto: "https://example.com/cover3.jpg",
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
  
  

  return (
    <div className=" w-full h-full">
      {projectFeed.map((item, index) => {
        return (
          <div
            key={index}
            className="rounded-md w-full m-2 p-2 shadow-md"
          >
            <div className="h-fit w-full flex p-1 justify-start cursor-pointer">
              <img src={item.owner.profilePhoto} alt="pfp not available!" />
              <div className="ml-5 p-1">
                <h2 className="font-semibold text-lg">{item.owner.name}</h2>
                <p className="text-sm opacity-75">{item.owner.branch}</p>
                <h3 className="font-medium">{item.owner.university}</h3>
              </div>
            </div>
            <div className="flex flex-col w-full cursor-pointer">
              <img className="w-full text-center" src={item.coverPhoto} alt="Cover photo unavailable!" />
              <h1 className="font-semibold text-lg">{item.title}</h1>
              <p className="w-fit whitespace-normal break-words">{item.description}</p>
              <p className="w-fit font-light text-sm">{item.likes.length} Likes</p>
            </div>
            <div className="flex">
              <button className="w-1/3  px-4 py-2 border border-black font-semibold text-sm bg-zinc-300 hover:bg-slate-300 text-black rounded-bl-md shadow-sm">
                Like
              </button>
              <button className="w-1/3  px-4  py-2 border border-black font-semibold text-sm bg-zinc-300 hover:bg-slate-300 text-black shadow-sm">
                Comment
              </button>
              <button className="w-1/3  px-4 py-2 border border-black font-semibold text-sm bg-zinc-300 hover:bg-slate-300 text-black rounded-br-md shadow-sm">
                Share
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectFeed;
