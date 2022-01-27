import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import JoinPage from "./routes/joinPage";
import LoginPage from "./routes/loginPage";
import ProfilePage from "./routes/profilePage";
import ProfileEditPage from './routes/profileEditPage';
import CartPage from "./routes/cartPage";
import OrderTypePage from "./routes/orderTypePage";
import UserOrderPage from "./routes/userOrderPage";
import NotUserOrderPage from "./routes/notUserOrderPage";

const App = () => {
  const menus = [
    {
    id: 1,
    name: '음식1111',
    price: 7400,
    qty: 1,

},
    {
    id: 2,
    name: '음식2222',
    price: 7400,
    qty: 1,

},
    {
    id: 3,
    name: '음식3333',
    price: 7400,
    qty: 1,

},
    {
    id: 4,
    name: '음식4444',
    price: 7400,
    qty: 1,

},
    {
    id: 5,
    name: '음식5555',
    price: 7400,
    qty: 1,

},
    {
    id: 6,
    name: '음식6666',
    price: 7400,
    qty: 1,
},
    {
    id: 7,
    name: '음식7',
    price: 7400,
    qty: 1,

},
    {
    id: 8,
    name: '음식8',
    price: 7400,
    qty: 1,

},
    {
    id: 9,
    name: '음식9',
    price: 7400,
    qty: 1,
},
];

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
