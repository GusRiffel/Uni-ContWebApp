import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/index";
import About from "./views/About";
import Pomodoro from "./views/Pomodoro";
import Login from "./views/Login";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Pomodoro />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
