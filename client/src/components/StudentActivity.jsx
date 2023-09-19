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

    return(
        <div className="drop-shadow-md hover:drop-shadow-xl flex flex-col items-center justify-center container rounded-md w-1/3 outline-1 outline px-1 m-1 ">
            <h3 className="mx-auto w-fit font-semibold mt-2">Student Leaderboards</h3>
                    <ul className="w-full mx-1 mt-3 bg-transparent h-fit font-semibold text-sm">
                    {students.map((item, index) => (
                        <li className="flex p-2 w-full items-center gap-2 rounded bg-white bg-opacity-20" key={index}>
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

            <Link className='w-full' to="/student_leaderboards">
            <button className="active:scale-95 w-full mb-1 px-4 py-2 font-semibold text-sm bg-primary hover:bg-primary-light text-white rounded-md shadow-sm">Open Leaderboards</button>
            </Link>
        </div>
    );
    
}

export default StudentActivity;