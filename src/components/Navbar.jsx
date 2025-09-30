import React, { use } from "react";
import userIcon from "../assets/user.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const handleLogout = () => {
        console.log("User Trying to Logout");
        logOut().then(() => {
            alert("You Logged Out confirmed");
        })
            .catch((error) => {
                console.log(error);
            })
    };
    return (
        <div className="flex justify-center ">
            <div className="flex gap-10 items-center">
                <div>{user && user.email}</div>
                <div className="nav flex gap-5">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/career">Career</NavLink>
                </div>
                <div className="login-btn flex gap-5 text-accent">
                    <img src={`${user ? user.photoURL : userIcon}`} alt="" />
                    {user ? (
                        <button onClick={handleLogout} className="btn btn-primary">
                            Logout
                        </button>
                    ) : (
                        <NavLink className="btn btn-primary" to="/auth/login">
                            Login
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Navbar;
