import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../../firebase.init";

const googleProvider = new GoogleAuthProvider();
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
    const userLogout = () => {
        return signOut(auth);
    }
    const userProfileUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const information = {
        createUser,
        signInUser,
        loginWithGoogle,
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
    }, [])
    return (
        <AuthContext.Provider value={information}>
            {children}

        </AuthContext.Provider>
    )
}
ContextProvider.propTypes = {
    children: PropTypes.node
}
