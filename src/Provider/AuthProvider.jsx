import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import App from '../App';
import app from '../firebase/firebase.config';
import { useEffect } from 'react';


export const AuthContext = createContext();
export const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logOut =()=>{
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authData = { user: user, setUser, createUser , logOut};
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;