import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (

        <div className='flex justify-center items-center '>
           
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                 <h2 className='mx-auto font-extrabold text-2xl'>Login Your Account</h2>
                <div className="card-body">
                    
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Don't Have the account? Please 
                            
                            <Link to="/auth/register" className='font-bold text-blue ml-3'>Register</Link>
                            </a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Login;