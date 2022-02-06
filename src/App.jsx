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

const App = ({authentication}) => {
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
        authentication={authentication}
      onClick={toggleSideBar} 
      isOpen={isOpen}
      menus={menus} />} />
      <Route path="/join" element={<JoinPage
        onClick={toggleSideBar}
        isOpen={isOpen}
      />} />
      <Route path="/profile" element={<ProfilePage
        authentication={authentication}
        onClick={toggleSideBar}
        isOpen={isOpen}
      />} />
      <Route path="/profileEdit" element={<ProfileEditPage
        authentication={authentication}
        onClick={toggleSideBar}
        isOpen={isOpen}
      />} />
      <Route path="/cart" element={<CartPage
        authentication={authentication}
        onClick={toggleSideBar}
        isOpen={isOpen}
      />} />
      <Route path="/userOrder" element={<UserOrderPage
        authentication={authentication}
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
        authentication={authentication}
      />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
