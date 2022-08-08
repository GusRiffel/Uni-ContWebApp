import { useState } from "react";
import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
} from "firebase/auth";

function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState("");
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(auth.currentUser);
            setIsAuthenticated(true);
            return;
        }
        setIsAuthenticated(false);
        return;
    });

    const createEmailUser = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password);

    const signInEmailUser = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);

    const signUserOut = () => signOut(auth);

    const signInGoogleUser = () => signInWithPopup(auth, googleProvider);
    const signInFacebookUser = () => signInWithPopup(auth, facebookProvider);

    return { createEmailUser, isAuthenticated, signInEmailUser, signUserOut, signInGoogleUser, signInFacebookUser, user };
}
export default useAuth;