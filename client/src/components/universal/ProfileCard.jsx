import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { logout } from '../../redux/slices/userSlice';

const ProfileCard = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);

    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <>
            <div className="flex flex-col p-3 justify-center items-center mx-7 rounded-xl bg-violet-600">
                <img className="w-2/3 rounded-full" src={`${user.profilePhoto ? user.profilePhoto : "../images/profile.png"}`} alt="" />
                <div className="flex flex-col justify-center items-center">
                    <p className="text-white mb-2 mt-1">{user.name}</p>
                    <p className="text-white cursor-pointer">
                        <NavLink to={`/${user.role}/profile`} className="hover:text-slate-300">
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