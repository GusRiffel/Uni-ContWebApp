import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState("");
  const [authError, setAuthError] = useState("");
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAuthenticated(true);
      setUser(user.email);
      return;
    }
    setIsAuthenticated(false);
    setUser("");
    return;
  });

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

  return {
    createEmailUser,
    isAuthenticated,
    user,
    authError,
    signInWithEmailUser,
    signUserOut,
  };
}

export default useAuth;
