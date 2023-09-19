function ProjectFeed() {
  const projectFeed = [
    {
      owner: {
        profilePhoto: "abc",
        name: "abcdjkfdj",
        branch: "b.tech.",
        university: "amity",
      },
      coverPhoto: "abc",
      title: "abcfkjdhkjf",
      description:
        "abcdefghijklkmsdkfjskdjfshdfkjhsdfhksdhfkhsdfhfhakjsdhfkjsdfkshkjfhskjfhskjhfkjshfkjshfshf",
      likes: [
        {
          userId: "xyz",
        },
      ],
    },
    {
        owner: {
          profilePhoto: "abc",
          name: "abcdjkfdj",
          branch: "b.tech.",
          university: "amity",
        },
        coverPhoto: "abc",
        title: "abcfkjdhkjf",
        description:
          "abcdefghijklkmsdkfjskdjfshdfkjhsdfhksdhfkhsdfhfhakjsdhfkjsdfkshkjfhskjfhskjhfkjshfkjshfshf",
        likes: [
          {
            userId: "xyz",
          },
        ],
      }
  ];

  return (
    <div className=" w-full h-full">
      {projectFeed.map((item, index) => {
        return (
          <div
            key={index}
            className="rounded-md w-full m-2 p-2 shadow-md"
          >
            <div className="h-fit w-full flex p-1">
              <img src={item.owner.profilePhoto} alt="" />
              <div className="ml-5 p-1">
                <h2>{item.owner.name}</h2>
                <p>{item.owner.branch}</p>
                <h3>{item.owner.university}</h3>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <img src={item.coverPhoto} alt="" />
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <p>{item.likes.length} Likes</p>
            </div>
            <div className="flex">
              <button className="w-1/3   px-4 py-2 font-semibold text-sm bg-white hover:bg-slate-300 text-black rounded-bl-md shadow-sm">
                Like
              </button>
              <button className="w-1/3  px-4  py-2 font-semibold text-sm bg-white hover:bg-slate-300 text-black shadow-sm">
                Comment
              </button>
              <button className="w-1/3  px-4 py-2  font-semibold text-sm bg-white hover:bg-slate-300 text-black rounded-br-md shadow-sm">
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
