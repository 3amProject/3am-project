import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthRoute from './routes/AuthRoute';
import Home from "./routes/Home";
import JoinPage from "./routes/JoinPage";
import LoginPage from "./routes/LoginPage";
import ProfilePage from "./routes/ProfilePage";
import ProfileEditPage from './routes/ProfileEditPage';
import CartPage from "./routes/CartPage";
import OrderTypePage from "./routes/OrderTypePage";
import UserOrderPage from "./routes/UserOrderPage";
import NotUserOrderPage from "./routes/NotUserOrderPage";
import { getMenus } from './service/noAuthService';

const App = () => {
  const isLoggedIn = () => {
    return localStorage.getItem('accessToken') ? true : false;
  }
  const [authUser, setAuthUser] = useState(isLoggedIn);

  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => {
    setIsOpen(isOpen => !isOpen);
  }

  const [menus, setMenus] = useState([]);

  useEffect(() => {
    setAuthUser(()=>isLoggedIn());
  },[authUser])

  useEffect(() => {
    getMenus()
    .then((result) => setMenus(result))
    .catch((error) => console.log(error));
  }, [getMenus]);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home
        onClick={toggleSideBar} 
        isOpen={isOpen}
        menus={menus} />} />

      <Route path="/join" element={<JoinPage
        onClick={toggleSideBar}
        isOpen={isOpen}
      />} />

      <Route path="/profile" element={<AuthRoute
        authUser={authUser}
        element={<ProfilePage
          authUser={authUser}
          onClick={toggleSideBar}
          isOpen={isOpen}
        />}
      />} />

      <Route path="/profileEdit" element={<AuthRoute
        authUser={authUser}
        element={<ProfileEditPage
          authUser={authUser}
          onClick={toggleSideBar}
          isOpen={isOpen}
        />}
      />} />

      <Route path="/cart" element={<CartPage
        authUser={authUser}
        onClick={toggleSideBar}
        isOpen={isOpen}
      />} />

      <Route path="/userOrder" element={<AuthRoute
        authUser={authUser}
        element={<UserOrderPage
          authUser={authUser}
          onClick={toggleSideBar}
          isOpen={isOpen}
        />}
      />} />

      <Route path="/notUserOrder" element={<NotUserOrderPage
        authUser={authUser}
        onClick={toggleSideBar}
        isOpen={isOpen}
      />} />

      <Route path="/login" element={<LoginPage
        authUser={authUser}
      />} />

      <Route path="/orderType" element={<OrderTypePage
        authUser={authUser}
      />} />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
