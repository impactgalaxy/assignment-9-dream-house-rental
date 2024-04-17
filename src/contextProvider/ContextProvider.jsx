import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../../firebase.init";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const AuthContext = createContext(null);


export default function ContextProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const loginWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }
    const userLogout = () => {
        setLoading(true);
        return signOut(auth);
    }
    const userProfileUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    const information = {
        createUser,
        signInUser,
        loginWithGoogle,
        loginWithGithub,
        userLogout,
        userProfileUpdate,
        user,
        loading,
        toast
    }
    useEffect(() => {
        const userCondition = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            userCondition();
        }
    }, []);
    console.log(user);

    return (
        <AuthContext.Provider value={information}>
            {children}
            <ToastContainer></ToastContainer>
        </AuthContext.Provider>
    )
}
ContextProvider.propTypes = {
    children: PropTypes.node
}
