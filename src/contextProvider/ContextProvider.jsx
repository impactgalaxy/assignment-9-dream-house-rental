import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../../firebase.init";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const AuthContext = createContext(null);


export default function ContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const loginWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }
    const userLogout = () => {
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
    }
    useEffect(() => {
        const userCondition = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            userCondition();
        }
    }, []);
    console.log(user);

    return (
        <AuthContext.Provider value={information}>
            {children}

        </AuthContext.Provider>
    )
}
ContextProvider.propTypes = {
    children: PropTypes.node
}
