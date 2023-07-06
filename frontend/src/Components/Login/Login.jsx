import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Actions/User";
import { useAlert } from "react-alert";
import logo from "../img/logo.jpg";
import closeEye from "../img/eye-close.png";
import openEye from "../img/eye-open.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error } = useSelector((state) => state.user);
  const { message } = useSelector((state) => state.like);

  const loginHandler = (e) => {
    e.preventDefault();

    dispatch(loginUser(email, password));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [alert, error, dispatch, message]);

  return (
    <div className="login_containe signup_container">
      <div className="form_container">
        <form className="loginform signupform" onSubmit={loginHandler}>
          <img src={logo} alt="" />
          <h4 className="form_title">
            Login to See Your Friend is Here! Come Together, Feel Together
          </h4>
          <div className="input_box">
            <input
              type="Email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input_box password_input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src={showPassword ? openEye : closeEye}
              alt="Show password"
              className="eye_icon"
              onClick={togglePasswordVisibility}
            />
          </div>
          <div className="input_data">
            <input type="submit" value={"Log In "} />
            {/* <button type="submit">Login</button> */}
          </div>
        </form>
        <hr />
        {/* <Link to={"/forgetpassword"}>Forget Password ?</Link> */}
        <Link to={"/forgot/password"}>Forget Password ?</Link>
        <hr />
        <center>or</center>
        <Link to={"/signup"}>New User - Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
