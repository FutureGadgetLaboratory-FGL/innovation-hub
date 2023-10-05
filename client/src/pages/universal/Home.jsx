import { Link } from "react-router-dom";
import React, { useState } from "react";

const Home = () => {
  const [isHoveredStudent, setIsHoveredStudent] = useState(false);
  const [isHoveredSpoc, setIsHoveredSpoc] = useState(false);
  const [isHoveredUadmin, setIsHoveredUadmin] = useState(false);
  const [isHoveredRecruiter, setIsHoveredRecruiter] = useState(false);

  const linkStyleStudent = {
	backgroundColor:"#ffffff",
    WebkitMaskImage:
      "linear-gradient(45deg, #000 25%, rgba(0, 0, 0, 0.2) 50%, #000 75%)",
    maskImage:
      "linear-gradient(45deg, #000 25%, rgba(0, 0, 0, 0.2) 50%, #000 75%)",
    WebkitMaskSize: "800%",
    maskSize: "800%",
    WebkitMaskPosition: isHoveredStudent ? "120%" : "0",
    maskPosition: isHoveredStudent ? "120%" : "0",
    opacity: isHoveredStudent ? "1" : "initial", // Add your hover styles here
    transition: "all 2s ease",
  };
  const linkStyleSpoc = {
	backgroundColor:"#ffffff",
    WebkitMaskImage:
      "linear-gradient(45deg, #000 25%, rgba(0, 0, 0, 0.2) 50%, #000 75%)",
    maskImage:
      "linear-gradient(45deg, #000 25%, rgba(0, 0, 0, 0.2) 50%, #000 75%)",
    WebkitMaskSize: "800%",
    maskSize: "800%",
    WebkitMaskPosition: isHoveredSpoc ? "120%" : "0",
    maskPosition: isHoveredSpoc ? "120%" : "0",
    opacity: isHoveredSpoc ? "1" : "initial", // Add your hover styles here
    transition: "all 2s ease",
  };
  const linkStyleUadmin = {
	backgroundColor:"#ffffff",
    WebkitMaskImage:
      "linear-gradient(45deg, #000 25%, rgba(0, 0, 0, 0.2) 50%, #000 75%)",
    maskImage:
      "linear-gradient(45deg, #000 25%, rgba(0, 0, 0, 0.2) 50%, #000 75%)",
    WebkitMaskSize: "800%",
    maskSize: "800%",
    WebkitMaskPosition: isHoveredUadmin ? "120%" : "0",
    maskPosition: isHoveredUadmin ? "120%" : "0",
    opacity: isHoveredUadmin ? "1" : "initial", // Add your hover styles here
    transition: "all 2s ease",
  };
  const linkStyleRecruiter = {
	backgroundColor:"#ffffff",
    WebkitMaskImage:
      "linear-gradient(45deg, #000 25%, rgba(0, 0, 0, 0.2) 50%, #000 75%)",
    maskImage:
      "linear-gradient(45deg, #000 25%, rgba(0, 0, 0, 0.2) 50%, #000 75%)",
    WebkitMaskSize: "800%",
    maskSize: "800%",
    WebkitMaskPosition: isHoveredRecruiter ? "120%" : "0",
    maskPosition: isHoveredRecruiter ? "120%" : "0",
    opacity: isHoveredRecruiter ? "1" : "initial", // Add your hover styles here
    transition: "all 2s ease",
  };

  return (
    <main className=" flex justify-center items-center w-100 h-[100vh] bg-slate-200">
      <div className="container ">
        <h1 className="p-3 mb-5 text-8xl font-bold text-center">
          Welcome to Student Innovation Hub
        </h1>
        <div className="flex gap-3 justify-center items-center link">
          <Link to={"/student/signin"} className="w-fit flex">
            <div
              className="flex flex-col grow border-2 border-gray-800 rounded-lg w-1/4  active:scale-95"
              style={linkStyleStudent}
              onMouseEnter={() => setIsHoveredStudent(true)}
              onMouseLeave={() => setIsHoveredStudent(false)}
            >
              <h1 className="text-xl p-2 w-full text-center  bg-blue-500 hover:bg-blue-600 text-white rounded-t-md">
                I am Student
              </h1>
              <p className="p-2 text-center">
                I can upload projects upon verification from university and also
                browse others' projects. I can collaborate in their projects and
                work alongside them and grow together.
              </p>
            </div>
          </Link>
          <Link to={"/spoc/signin"} className="w-fit flex">
            <div
              className="flex flex-col grow border-2 border-gray-800 rounded-lg w-1/4  active:scale-95"
              style={linkStyleSpoc}
              onMouseEnter={() => setIsHoveredSpoc(true)}
              onMouseLeave={() => setIsHoveredSpoc(false)}
            >
              <h1 className="text-xl p-2 w-full text-center  bg-blue-500 hover:bg-blue-600 text-white rounded-t-md">
                I am SPOC
              </h1>
              <p className="p-2 text-center">
                I oversee student verification, university admin accounts,
                project uploads, and collaborations, ensuring our university's
                presence and functionality on the platform.
              </p>
            </div>
          </Link>
          <Link to={"/uadmin/signin"} className="w-fit flex">
            <div
              className="flex flex-col grow border-2 border-gray-800 rounded-lg w-1/4  active:scale-95"
              style={linkStyleUadmin}
              onMouseEnter={() => setIsHoveredUadmin(true)}
              onMouseLeave={() => setIsHoveredUadmin(false)}
            >
              <h1 className="text-xl p-2 w-full text-center  bg-blue-500 hover:bg-blue-600 text-white rounded-t-md">
                I am University Admin
              </h1>
              <p className="p-2 text-center">
                I share responsibilities with the SPOC, ensuring student
                verification, project uploads, and collaboration management for
                our university's presence and smooth platform functioning.
              </p>
            </div>
          </Link>
          <Link to={"/recruiter/signin"} className="w-fit flex">
            <div
              className="flex flex-col grow border-2 border-gray-800 rounded-lg w-1/4  active:scale-95"
              style={linkStyleRecruiter}
              onMouseEnter={() => setIsHoveredRecruiter(true)}
              onMouseLeave={() => setIsHoveredRecruiter(false)}
            >
              <h1 className="text-xl p-2 w-full text-center  bg-blue-500 hover:bg-blue-600 text-white rounded-t-md">
                I am Recruiter
              </h1>
              <p className="p-2 text-center">
                I oversee company accounts, identify outstanding universities
                and students, offer internship/job opportunities, and fund
                promising projects, contributing to their growth and success.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
