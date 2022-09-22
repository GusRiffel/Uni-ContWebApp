import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

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

  function createUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
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
        signUserOut,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
