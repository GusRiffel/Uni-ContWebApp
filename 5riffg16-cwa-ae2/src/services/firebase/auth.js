import { useState, useEffect, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import app from "../../config/firabaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      setCurrentUser(user)
      setPending(false)
      if (user) {
        navigate("/");
      }
    });
  }, []);

  async function createEmailUser(email, password) {
    let user;
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        user = userCredential.user;
      })
      .catch((error) => {
        setAuthError(error.message);
      });
    return user;
  }

  async function signInWithEmailUser(email, password) {
    let user;
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        user = userCredential.user;
      })
      .catch((error) => {
        setAuthError(error.message);
      });
    return user;
  }

  function signUserOut() {
    signOut(auth);
  }

  if(pending){
    return <>Loading...</>
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        createEmailUser,
        authError,
        signInWithEmailUser,
        signUserOut,
        pending
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};