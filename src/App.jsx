import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import JoinPage from "./routes/JoinPage";
import LoginPage from "./routes/LoginPage";
import ProfilePage from "./routes/ProfilePage";
import ProfileEditPage from './routes/ProfileEditPage';
import CartPage from "./routes/CartPage";
import OrderTypePage from "./routes/OrderTypePage";
import UserOrderPage from "./routes/UserOrderPage";
import NotUserOrderPage from "./routes/NotUserOrderPage";

const App = ({menus}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => {
    setIsOpen(isOpen => !isOpen);
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home 
        
        onClick={toggleSideBar} 
        isOpen={isOpen}
        menus={menus} />} />
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
      <Route path="/cart" element={<CartPage
        
        onClick={toggleSideBar}
        isOpen={isOpen}
      />} />
      <Route path="/userOrder" element={<UserOrderPage
        
        onClick={toggleSideBar}
        isOpen={isOpen}
      />} />
      <Route path="/notUserOrder" element={<NotUserOrderPage
        onClick={toggleSideBar}
        isOpen={isOpen}
      />} />
      <Route path="/login" element={<LoginPage
      />} />
      <Route path="/orderType" element={<OrderTypePage
        
      />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
