import React, { use } from 'react';
import user from "../assets/user.png"
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {
    const { user } = use(AuthContext);
    return (
        <div className='flex justify-center '>
            <div className='flex gap-10 items-center'>
                <div>{user && user.email}</div>
                <div className="nav flex gap-5">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/career">Career</NavLink>
                </div>
                <div className="login-btn flex gap-5 text-accent">
                    <img src={user} alt="" />
                    {/* <Link to="/auth/login" className='btn btn-primary'>Login</Link>
                    */}
                    {/* <NavLink to="/auth/login">Login</NavLink> */}
                    <NavLink className="btn btn-primary" to="/auth/login">Link</NavLink>
                </div>
            </div>
        </div>
    );
};
export default Navbar;