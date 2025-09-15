import React from 'react';
import { NavLink } from 'react-router';
import user from "../assets/user.png"
 

const Navbar = () => {
    return (
        <div className='flex justify-center '>
        <div></div>
        <div className="nav flex gap-5">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>
        </div>
        <div className="login-btn flex gap-5 text-accent">
            <img src={user} alt="" />
        <button className='btn-primary'>Login</button>
        </div>
        </div>
    );
};

export default Navbar;