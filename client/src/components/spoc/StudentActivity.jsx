import {Link} from 'react-router-dom';
function StudentActivity()  {
    const students = [
        {
            name: "Alice",
            email: "alice@gmail.com",
            password: "password123",
            gender: "Female",
            profilePhoto: "https://example.com/alice.jpg",
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
            profilePhoto: "https://example.com/bob.jpg",
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
            profilePhoto: "https://example.com/charlie.jpg",
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
        }
    ];
    students.sort((a, b) => b.popularity - a.popularity);

    return (
			<div className="bg-white m-3 p-3 w-1/3 rounded-xl shadow-[rgba(0,0,0,0.1)_0px_15px_20px_0px,rgba(0,0,0,0.04)_0px_10px_10px_-5px]">
				<h3 className="text-[16px] font-semibold">Student Leaderboard</h3>
				<ul className="mt-2 mb-3 text-[12px] font-normal">
					{students.map((item, index) => (
						<li className="flex p-1 gap-2 border-b " key={index}>
							<p>{index + 1}</p>
							<p className="w-full">{item.name}</p>
							<p>{item.popularity}</p>
						</li>
					))}
				</ul>

				{/* <div className="relative w-100 mx-1 mt-3 bg-transparent h-fit font-semibold text-sm">
                <p className="px-2 inline-block">User 1</p>
                <p className="absolute right-0 px-2 inline-block">points</p><hr/>
                <p className="px-2 inline-block">User 2</p>
                <p className="absolute right-0 px-2 inline-block">points</p><hr/>
                <p className="px-2 inline-block">User 3</p>
                <p className="absolute right-0 px-2 inline-block">points</p><hr/>
            </div> */}

				<Link to="/student_leaderboards">
					<button className="active:scale-95  mb-1 px-4 py-2 font-semibold text-[12px] bg-primary text-white rounded-md ">
						Open Leaderboard
					</button>
				</Link>
			</div>
		);
    
}

export default StudentActivity;