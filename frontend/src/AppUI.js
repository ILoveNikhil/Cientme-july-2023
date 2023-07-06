import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "./Actions/User";
import Home from "./Components/Home/Home";
import Account from "./Components/Account/Account";
import NewPost from "./Components/NewPost/NewPost";
import SignUp from "./Components/SignUp/SignUp";
import UpdateProfile from "./Components/UpdateProfile/UpdateProfile";
import UpdatePassword from "./Components/UpdatePassword/UpdatePassword";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import UserProfile from "./Components/UserProfile/UserProfile";
import Search from "./Components/Search/Search";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  // const { isAuthenticated } = useSelector((state) => state.user);

  return (
    // <Router>
      <Routes>
        {/* <Header /> */}

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/update/profile" element={<UpdateProfile />} />
        <Route path="/update/password" element={<ResetPassword />} />
        <Route path="/forgot/password" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<UpdatePassword />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
