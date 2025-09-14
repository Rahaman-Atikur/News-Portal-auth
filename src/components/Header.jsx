import React from 'react';
import logo from "../assets/logo.png";
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3'>
            <img src={logo} alt="" />
            <p>News Will be Fear and Without Fear</p>
            <p>{format(new Date(),"EEEE,MMMM dd,yyyy")}</p>
        </div>
    );
};

export default Header;