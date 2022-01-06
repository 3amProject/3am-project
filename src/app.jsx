import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import JoinPage from "./routes/joinPage/joinPage";
import LoginPage from "./routes/loginPage/loginPage";
import ProfilePage from "./routes/profilePage/profilePage";


const App = ({userAuth}) => {
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
        userAuth={userAuth}
      />} />
      <Route path="/join" element={<JoinPage
        onClick={toggleSideBar}
        isOpen={isOpen}
        userAuth={userAuth}
      />} />
      <Route path="/profile" element={<ProfilePage
        onClick={toggleSideBar}
        isOpen={isOpen}
        userAuth={userAuth}
      />} />
      <Route path="/login" element={<LoginPage
        userAuth={userAuth}
      />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
