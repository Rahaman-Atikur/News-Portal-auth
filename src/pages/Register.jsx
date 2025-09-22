import React from 'react';
import { Link } from 'react-router';
const Register = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                    <h2 className='mx-auto font-extrabold text-2xl'>Register Your Account</h2>
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" className="input" placeholder="Name" />
                            <label className="label">Photo URL</label>
                            <input type="text" className="input" placeholder="Photo Url" />
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Already Have an Account?</a>
                            <Link className='text-blue font-bold ml-3' to ="/auth/login">Login</Link>
                            
                            </div>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register;