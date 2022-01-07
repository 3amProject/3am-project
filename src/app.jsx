import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import JoinPage from "./routes/joinPage/joinPage";
import LoginPage from "./routes/loginPage/loginPage";
import ProfilePage from "./routes/profilePage/profilePage";
import ProfileEditPage from './routes/profileEditPage/profileEditPage';

const App = () => {
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
      <Route path="/profile" element={<ProfilePage
        onClick={toggleSideBar}
        isOpen={isOpen}
      />} />
      <Route path="/profileEdit" element={<ProfileEditPage
        onClick={toggleSideBar}
        isOpen={isOpen}
      />} />
      <Route path="/login" element={<LoginPage
      />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
