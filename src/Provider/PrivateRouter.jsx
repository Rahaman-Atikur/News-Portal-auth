import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRouter = ({ children }) => {
    //  if user is available then navigate to login
    const { user, loading } = use(AuthContext);
    console.log(user);

    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>
    }

    if (user && user?.email) {
        return children;
    }
    return <Navigate to='/auth/login'></Navigate>


};

export default PrivateRouter;