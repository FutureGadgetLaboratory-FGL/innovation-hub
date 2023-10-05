import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileCard from "./ProfileCard";

const Sidebar = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <aside className="w-1/5 h-[100vh] overflow-y-auto no-scrollbar bg-[#f4f5fa] border-r pr-1 pt-[90px] sticky top-0">
      {/* <div className="text-[#7445cb] text-[1.2rem] h-[60px] font-semibold  flex flex-col justify-center items-start border-b mb-3 p-[20px]">
				<h2>STUDENT</h2>
				<h2>INNOVATION HUB</h2>
			</div> */}
      {user.role === "SPOC" ? (
        <ul className="flex flex-col w-full items-start">
          <NavLink
            to={"/spoc/dashboard"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>
              <FontAwesomeIcon icon="fa-solid fa-house" className="pr-3" />
              Dashboard
            </li>
          </NavLink>

          <NavLink
            to={"/spoc/upload-requests"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>
              <FontAwesomeIcon icon="fa-solid fa-upload" className="pr-3" />
              Upload Requests
            </li>
          </NavLink>
          <NavLink
            to={"/spoc/collaboration-request"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>
              <FontAwesomeIcon
                icon="fa-solid fa-people-group"
                className="pr-3"
              />
              Collaboration Requests
            </li>
          </NavLink>
          <NavLink
            to={"/spoc/verify-student"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>
              <FontAwesomeIcon icon="fa-solid fa-check" className="pr-3" />
              Verify Students
            </li>
          </NavLink>
          <NavLink
            to={"/spoc/assign-admin"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>
              <FontAwesomeIcon icon="fa-solid fa-gear" className="pr-3" />
              Assign Admin
            </li>
          </NavLink>

          <NavLink
            to={"/spoc/settings"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>
              <FontAwesomeIcon icon="fa-solid fa-gear" className="pr-3" />
              Settings
            </li>
          </NavLink>
          <NavLink
            to={"/contact-us"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>
              <FontAwesomeIcon icon="fa-solid fa-message" className="pr-3" />
              Contact Us
            </li>
          </NavLink>
          <hr className="w-[100%] mt-3 mb-5"></hr>

          <ProfileCard />
        </ul>
      ) : user.role === "Student" ? (
        <ul className="flex flex-col items-start">
          <NavLink
            to={"/student/dashboard"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>
              <FontAwesomeIcon icon="fa-solid fa-house" className="pr-3" />
              Dashboard
            </li>
          </NavLink>

          <NavLink
            to={"/student/upload-project"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>
              <FontAwesomeIcon icon="fa-solid fa-upload" className="pr-3" />
              Upload Project
            </li>
          </NavLink>
          <NavLink
            to={"/student/browse-projects"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>
              <FontAwesomeIcon icon="fa-solid fa-globe" className="pr-3" />
              Browse Projects
            </li>
          </NavLink>
          <NavLink
            to={"/student/collaborations"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>
              <FontAwesomeIcon
                icon="fa-solid fa-people-group"
                className="pr-3"
              />
              Collaboration
            </li>
          </NavLink>
          <NavLink
            to={"/student/contests"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>
              <FontAwesomeIcon icon="fa-solid fa-trophy" className="pr-3" />
              Contests
            </li>
          </NavLink>

          <NavLink
            to={"/student/settings"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>
              <FontAwesomeIcon icon="fa-solid fa-gear" className="pr-3" />
              Settings
            </li>
          </NavLink>
          <NavLink
            to={"/contact-us"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>
              <FontAwesomeIcon icon="fa-solid fa-message" className="pr-3" />
              Contact Us
            </li>
          </NavLink>
          <hr className="w-[100%] mt-3 mb-5"></hr>

          <ProfileCard />
        </ul>
      ) : user.role === "SuperAdmin" ? (
        <ul className="flex flex-col items-start">
          <NavLink
            to={"/superadmin/dashboard"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>
              <FontAwesomeIcon icon="fa-solid fa-house" className="pr-3" />
              Dashboard
            </li>
          </NavLink>

          <NavLink
            to={"/superadmin/verify-spoc-and-univ"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>
              <FontAwesomeIcon icon="fa-solid fa-user-check" className="pr-3" />
              Verify SPOC
            </li>
          </NavLink>
          <NavLink
            to={"/superadmin/verify-recruiters"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>
              <FontAwesomeIcon
                icon="fa-solid fa-building-user"
                className="pr-3"
              />
              Verify Recruiters
            </li>
          </NavLink>
          <NavLink
            to={"/superadmin/organize-competitions"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>
              <FontAwesomeIcon icon="fa-solid fa-trophy" className="pr-3" />
              Organize Competitions
            </li>
          </NavLink>
          <NavLink
            to={"/superadmin/manage-revenue"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>
              <FontAwesomeIcon
                icon="fa-solid fa-sack-dollar"
                className="pr-3"
              />
              Revenue Management
            </li>
          </NavLink>

          <NavLink
            to={"/superadmin/settings"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>
              <FontAwesomeIcon icon="fa-solid fa-gear" className="pr-3" />
              Settings
            </li>
          </NavLink>
          <NavLink
            to={"/contact-us"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>
              <FontAwesomeIcon icon="fa-solid fa-message" className="pr-3" />
              Contact Us
            </li>
          </NavLink>
          <hr className="w-[100%] mt-3 mb-5"></hr>

          <ProfileCard />
        </ul>
      ) : user.role === "UniversityAdmin" ? (
        <ul className="flex flex-col items-start">
          <NavLink
            to={"/uadmin/dashboard"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>
              <i className="fa-solid fa-house"></i>
              Dashboard
            </li>
          </NavLink>

          <NavLink
            to={"/uadmin/upload-requests"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>Upload Requests</li>
          </NavLink>
          <NavLink
            to={"/uadmin/collaboration-request"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>Collaboration Requests</li>
          </NavLink>
          <NavLink
            to={"/uadmin/verify-student"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>Verify Students</li>
          </NavLink>
          <NavLink
            to={"/uadmin/assign-admin"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>Assign Admin</li>
          </NavLink>

          <NavLink
            to={"/uadmin/settings"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>
              <FontAwesomeIcon icon="fa-solid fa-gear" className="pr-3" />
              Settings
            </li>
          </NavLink>
          <NavLink
            to={"/contact-us"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>
              <FontAwesomeIcon icon="fa-solid fa-message" className="pr-3" />
              Contact Us
            </li>
          </NavLink>
          <hr className="w-[100%] mt-3 mb-5"></hr>

          <ProfileCard />
        </ul>
      ) : (
        <ul className="flex flex-col items-start">
          <NavLink
            to={"/recruiter/dashboard"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>
              <i className="fa-solid fa-house"></i>
              Dashboard
            </li>
          </NavLink>

          <NavLink
            to={"/recruiter/upload-project"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>Upload Project</li>
          </NavLink>
          <NavLink
            to={"/recruiter/browse-projects"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>Browse Projects</li>
          </NavLink>
          <NavLink
            to={"/recruiter/collaborations"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>Collaboration</li>
          </NavLink>
          <NavLink
            to={"/recruiter/contests"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>Contests</li>
          </NavLink>

          <NavLink
            to={"/recruiter/settings"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>
              <FontAwesomeIcon icon="fa-solid fa-gear" className="pr-3" />
              Settings
            </li>
          </NavLink>
          <NavLink
            to={"/contact-us"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>
              <FontAwesomeIcon icon="fa-solid fa-message" className="pr-3" />
              Contact Us
            </li>
          </NavLink>
          <hr className="w-[100%] mt-3 mb-5"></hr>

          <ProfileCard />
        </ul>
      )}
    </aside>
  );
};

export default Sidebar;
