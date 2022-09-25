import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const auth = getAuth();

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      navigate("/");
    });
    return unsubscribe;
  }, []);

  function setUserName(user, userName) {
    return updateProfile(user, {
      displayName: userName,
    });
  }

  function createUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signInGoogleUser() {
    signInWithPopup(auth, googleProvider)
  }

  function signInFacebookUser() {
    signInWithPopup(auth, facebookProvider)
  }

  function signUserOut() {
    signOut(auth);
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        createUser,
        signIn,
        signInGoogleUser,
        signInFacebookUser,
        signUserOut,
        setUserName,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
