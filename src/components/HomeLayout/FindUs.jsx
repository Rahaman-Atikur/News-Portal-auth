import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us </h2>
            <div className='join join-vertical gap-5 w-full'>
                <button className="btn justify-start   btn-secondary"> <FaXTwitter /> Twitter</button>
                <button className="btn justify-start  btn-secondary"> <FaFacebook size={24} />  Facebook</button>
                <button className="btn justify-start  btn-secondary"> <FaInstagram size={24} /> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;