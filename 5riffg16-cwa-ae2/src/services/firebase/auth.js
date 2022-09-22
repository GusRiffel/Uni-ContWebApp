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
  const auth = getAuth();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  console.log(currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      navigate("/");
    });
    return unsubscribe;
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

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        createEmailUser,
        authError,
        signInWithEmailUser,
        signUserOut,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
