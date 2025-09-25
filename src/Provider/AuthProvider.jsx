import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import App from '../App';
export const AuthContext = createContext();
const auth = getAuth(App);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const authData = { user: user, setUser,createUser };
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;