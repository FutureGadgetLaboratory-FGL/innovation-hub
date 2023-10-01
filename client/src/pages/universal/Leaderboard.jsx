

function StudentLeaderboard() {
  // const dispatch = useDispatch();
  // const students = useSelector((state) => state.student.students);

  // useEffect(() => {
  //   dispatch(getAllStudents());
  // }, [dispatch]);
  const students = [
    {
      name: "Alice",
      email: "alice@gmail.com",
      password: "password123",
      gender: "Female",
      profilePhoto: "https://picsum.photos/64",
      role: "Student",
      university: "Amity",
      branch: "B.Tech.",
      workEmail: "alice@workplace.com",
      startYear: 2021,
      endYear: 2025,
      enrollment: "A7602384953",
      sihGems: 0,
      popularity: 32,
      status: "verified",
    },
    {
      name: "Bob",
      email: "bob@gmail.com",
      password: "secure123",
      gender: "Male",
      profilePhoto: "https://picsum.photos/64",
      role: "Student",
      university: "Harvard",
      branch: "Computer Science",
      workEmail: "bob@workplace.com",
      startYear: 2020,
      endYear: 2024,
      enrollment: "H123456789",
      sihGems: 5,
      popularity: 45,
      status: "verified",
    },
    {
      name: "Charlie",
      email: "charlie@gmail.com",
      password: "strongPassword",
      gender: "Male",
      profilePhoto: "https://picsum.photos/64",
      role: "Student",
      university: "MIT",
      branch: "Electrical Engineering",
      workEmail: "",
      startYear: 2019,
      endYear: 2023,
      enrollment: "M987654321",
      sihGems: 10,
      popularity: 60,
      status: "verified",
    },
  ];
  students.sort((a, b) => b.popularity - a.popularity);
  return (
    <div className="flex ">
			<div className="w-[83%]">
        <div className="drop-shadow-md flex flex-col items-center justify-center container rounded-md w-full border px-1 m-1 ">
      <h3 className="mx-auto w-fit font-semibold text-xl mt-2">Student Leaderboards</h3>
      <hr/>
      <ul className="w-full mx-1 mt-3 bg-transparent h-fit font-semibold text-sm">
        {students.map((item, index) => (
          <li
            className="flex cursor-pointer p-2 w-full items-center justify-evenly gap-2 rounded bg-white bg-opacity-20"
            key={index}
          >
            <p>{index + 1}</p>
            <div className="w-full flex items-center">
            <img className="rounded-full border border-black m-2" src={item.profilePhoto} alt="N/A"/>
            <p className="w-1/4">{item.name}</p>
            <p className="w-1/4">{item.branch}</p>
            <p className="w-1/4">{item.enrollment}</p>
            </div>
            <p>{item.popularity}</p>
          </li>
        ))}
      </ul>
    </div>
      </div>
    </div>    
  );
}

export default StudentLeaderboard;
