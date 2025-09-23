import React from 'react';
import { Link } from 'react-router';
const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoUrl, email, password);



    }
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                    <h2 className='mx-auto font-extrabold text-2xl'>Register Your Account</h2>
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input name='name' type="text" className="input" placeholder="Name" />
                            <label className="label">Photo URL</label>
                            <input name='photoUrl' type="text" className="input" placeholder="Photo Url" />
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Already Have an Account?</a>
                                <Link className='text-blue font-bold ml-3' to="/auth/login">Login</Link>

                            </div>
                            <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Register;