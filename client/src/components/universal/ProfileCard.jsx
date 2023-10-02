import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

const ProfileCard = () => {
    const user = useSelector(state => state.user.user);

    const handleLogout = (e) => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    };
    return (
        <>
            <div className="flex flex-col p-3  justify-center items-center mx-7 rounded-xl bg-violet-600">
                <img className="w-2/3 rounded-full" src={`${user.profilePhoto}`} alt="/images/profile.png" />
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
        </>
    )
}

export default ProfileCard