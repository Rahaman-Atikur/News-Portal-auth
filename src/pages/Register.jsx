import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const [nameError, setNameError] = useState();

  const navigator = useNavigate();
  // const [user,setUser] = useState(null);

  const handleRegister = (e) => {

    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name should be more than 5 character");
      return;
    }
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoUrl, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoUrl: photo }).then(() => {
          setUser({ ...user, displayName: name, photoUrl: photo });
          
        }).catch((error) => {
          console.log(error);
          setUser(user);
        });
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage, errorCode);
      });
  };
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
          <h2 className="mx-auto font-extrabold text-2xl">
            Register Your Account
          </h2>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              {/* Name Field */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
              />
              {/* Photo Field */}
              <label className="label">Photo URL</label>
              <input
                name="photoUrl"
                type="text"
                className="input"
                placeholder="Photo Url"
              />
              required
              {/* Email Field */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              required
              {/* Password Field */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Already Have an Account?</a>
                <Link className="text-blue font-bold ml-3" to="/auth/login">
                  Login
                </Link>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
