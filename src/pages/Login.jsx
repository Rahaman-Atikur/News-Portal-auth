import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const { signIn } = use(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });
        signIn()
            .then((result => {
                const user = result.user;
                console.log(user);
            }))
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage);
            })
    }
    return (

        <div className='flex justify-center items-center '>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                <h2 className='mx-auto font-extrabold text-2xl'>Login Your Account</h2>
                <div className="card-body">

                    <form onSubmit={handleLogin} className="fieldset">
                        {/* Email */}
                        <label className="label">Email</label>
                        <input name='email'
                            type="email" className="input" placeholder="Email" />

                        {/* Password */}
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />

                        <div><a className="link link-hover">Don't Have the account? Please

                            <Link to="/auth/register" className='font-bold text-blue ml-3'>Register</Link>
                        </a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;