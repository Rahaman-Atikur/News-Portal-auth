import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div className='space-y-5'>
            <h1 className='font-bold'>Login With</h1>
            <button className=' btn btn-outline btn-secondary w-full font-bold mb-5'>   <FaGoogle size={24}/>
                Login With Google</button>
            <button className=' btn btn-outline btn-primary w-full font-bold mb-5'><FaGithub size={24} /> Login With Github</button>
        </div>
    );
};
export default SocialLogin;