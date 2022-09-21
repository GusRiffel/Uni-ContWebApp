// import { useState, createContext } from "react";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
// import { useEffect } from "react";
// import { initializeApp } from "firebase/app";

// export const AuthContext = createContext();

// function useAuth() {
//   const auth = getAuth();
//   const [user, setUser] = useState("");
//   const [authError, setAuthError] = useState("");
//   const userr = auth.currentUser;


//   // useEffect(() => {
//   //   const authState = onAuthStateChanged(auth, (user) => {
//   //     if (user) {
//   //       setUser(user);
//   //     } else {
//   //       setUser("");
//   //     }
//   //   });
//   //   return authState;
//   // }, []);

//   async function createEmailUser(email, password) {
//     let user;
//     await createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         user = userCredential.user;
//       })
//       .catch((error) => {
//         setAuthError(error.message);
//       });
//     return user;
//   }

//   async function signInWithEmailUser(email, password) {
//     let user;
//     await signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         user = userCredential.user;
//       })
//       .catch((error) => {
//         setAuthError(error.message);
//       });
//     return user;
//   }

//   function signUserOut() {
//     signOut(auth);
//   }

//   function getContext() {
//     return (
//       <AuthContext.Provider value={{user}} />
//     )
//   }

//   return {
//     createEmailUser,
//     user,
//     authError,
//     signInWithEmailUser,
//     signUserOut,
//     userr,
//     getContext
//   };
// }

// export default useAuth;
