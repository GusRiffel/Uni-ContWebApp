import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/index";
import About from "./views/About";
import Pomodoro from "./views/Pomodoro";
import Login from "./views/Login";
import Register from "./views/Register";

function App() {
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
