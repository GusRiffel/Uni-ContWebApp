import { Route, Routes } from "react-router-dom";

import { initializeApp } from "firebase/app";

import "./App.css";
import Header from "./components/Header/index";
import About from "./views/About";
import Pomodoro from "./views/Pomodoro";
import Login from "./views/Login";
import Register from "./views/Register";
import useAuth from "./services/firebase/useAuth";
import firebaseConfig from "./config/firabaseConfig";

function App() {
  const app = initializeApp(firebaseConfig);
  const {isAuthenticated, user} = useAuth();
  console.log(user);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Pomodoro />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
