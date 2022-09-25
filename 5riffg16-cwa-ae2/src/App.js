import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/index";
import About from "./views/About";
import Pomodoro from "./views/Pomodoro";
import Login from "./views/Login";
import Register from "./views/Register";
import DashBoardView from "./views/DashBoardView";
import { AuthProvider } from "./services/firebase/auth";
import app from "./config/firabaseConfig"

function App() {

  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Pomodoro />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<DashBoardView />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
