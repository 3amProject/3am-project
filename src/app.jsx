import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import JoinPage from "./routes/joinPage/joinPage";
import LoginPage from "./routes/loginPage/loginPage";
import Profile from "./routes/profile/profile";

function App() {
  const [isOpen, setState] = useState(false);
    const toggleSideBar = () => {
        setState(isOpen => !isOpen);
    }
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home
        onClick={toggleSideBar}
        isOpen={isOpen}
      />} />
      <Route path="/join" element={<JoinPage
        onClick={toggleSideBar}
        isOpen={isOpen}
      />} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
