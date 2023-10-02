import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Sidebar = ({ user }) => {
  const handleLogout = (e) => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };
  return (
    <aside className="w-[17%] h-[100vh] bg-[#f4f5fa] border-r pr-1 pt-[90px] sticky top-0">
      {/* <div className="text-[#7445cb] text-[1.2rem] h-[60px] font-semibold  flex flex-col justify-center items-start border-b mb-3 p-[20px]">
				<h2>STUDENT</h2>
				<h2>INNOVATION HUB</h2>
			</div> */}
      {user === "spoc" ? (
        <ul className="flex flex-col items-start">
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

          <div className="flex flex-col p-3  justify-center items-center mx-7 rounded-xl bg-violet-600">
            <img className="w-2/3" src="/images/profile.png" alt="" />
            <div className="flex flex-col justify-center items-center">
              <p className="text-white mb-2 mt-1">Ashutosh Verma</p>
              <p className="text-white cursor-pointer">
                <NavLink to={"/spoc/profile"} className="hover:text-slate-300">
                  Profile
                </NavLink>
              </p>
              <p className="text-white cursor-pointer">
                <NavLink
                  to={"/"}
                  className="hover:text-slate-300"
                  onClick={handleLogout}
                >
                  Logout
                </NavLink>
              </p>
            </div>
          </div>
        </ul>
      ) : user === "student" ? (
        <ul className="flex flex-col items-start">
          <NavLink
            to={"/student/dashboard"}
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
            to={"/student/upload-project"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>Upload Project</li>
          </NavLink>
          <NavLink
            to={"/student/browse-projects"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>Browse Projects</li>
          </NavLink>
          <NavLink
            to={"/student/collaborations"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>Collaboration</li>
          </NavLink>
          <NavLink
            to={"/student/contests"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>Contests</li>
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

          <div className="flex flex-col p-3  justify-center items-center mx-7 rounded-xl bg-violet-600">
            <img className="w-2/3" src="/images/profile.png" alt="" />
            <div className="flex flex-col justify-center items-center">
              <p className="text-white mb-2 mt-1">Ashutosh Verma</p>
              <p className="text-white cursor-pointer">
                <NavLink to={"/spoc/profile"} className="hover:text-slate-300">
                  Profile
                </NavLink>
              </p>
              <p className="text-white cursor-pointer">
                <NavLink
                  to={"/"}
                  className="hover:text-slate-300"
                  onClick={handleLogout}
                >
                  Logout
                </NavLink>
              </p>
            </div>
          </div>
        </ul>
      ) : user === "superAdmin" ? (
        <ul className="flex flex-col items-start">
          <NavLink
            to={"/superadmin/dashboard"}
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
            to={"/superadmin/verify-spoc-and-univ"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>Verify SPOC</li>
          </NavLink>
          <NavLink
            to={"/superadmin/verify-recruiters"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>Verify Recruiters</li>
          </NavLink>
          <NavLink
            to={"/superadmin/organize-competitions"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>Organize Competitions</li>
          </NavLink>
          <NavLink
            to={"/superadmin/manage-revenue"}
            className={
              "ease-in duration-100 text-[#534f5a] text-[1rem] font-normal w-full mb-[8px] pl-5 p-[7px] hover:cursor-pointer hover:bg-[#cccdd1] rounded-[0_50px_50px_0] "
            }
            end
          >
            <li>Revenue Management</li>
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

          <div className="flex flex-col p-3  justify-center items-center mx-7 rounded-xl bg-violet-600">
            <img className="w-2/3" src="/images/profile.png" alt="" />
            <div className="flex flex-col justify-center items-center">
              <p className="text-white mb-2 mt-1">Ashutosh Verma</p>
              <p className="text-white cursor-pointer">
                <NavLink to={"/spoc/profile"} className="hover:text-slate-300">
                  Profile
                </NavLink>
              </p>
              <p className="text-white cursor-pointer">
                <NavLink
                  to={"/"}
                  className="hover:text-slate-300"
                  onClick={handleLogout}
                >
                  Logout
                </NavLink>
              </p>
            </div>
          </div>
        </ul>
      ) : user === "uAdmin" ? (
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

          <div className="flex flex-col p-3  justify-center items-center mx-7 rounded-xl bg-violet-600">
            <img className="w-2/3" src="/images/profile.png" alt="" />
            <div className="flex flex-col justify-center items-center">
              <p className="text-white mb-2 mt-1">Ashutosh Verma</p>
              <p className="text-white cursor-pointer">
                <NavLink to={"/spoc/profile"} className="hover:text-slate-300">
                  Profile
                </NavLink>
              </p>
              <p className="text-white cursor-pointer">
                <NavLink
                  to={"/"}
                  className="hover:text-slate-300"
                  onClick={handleLogout}
                >
                  Logout
                </NavLink>
              </p>
            </div>
          </div>
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

          <div className="flex flex-col p-3  justify-center items-center mx-7 rounded-xl bg-violet-600">
            <img className="w-2/3" src="/images/profile.png" alt="" />
            <div className="flex flex-col justify-center items-center">
              <p className="text-white mb-2 mt-1">Ashutosh Verma</p>
              <p className="text-white cursor-pointer">
                <NavLink to={"/spoc/profile"} className="hover:text-slate-300">
                  Profile
                </NavLink>
              </p>
              <p className="text-white cursor-pointer">
                <NavLink
                  to={"/"}
                  className="hover:text-slate-300"
                  onClick={handleLogout}
                >
                  Logout
                </NavLink>
              </p>
            </div>
          </div>
        </ul>
      )}
    </aside>
  );
};

export default Sidebar;
