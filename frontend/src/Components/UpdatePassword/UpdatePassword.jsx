import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { updatePassword } from "../../Actions/User";
import logo from "../img/logo.jpg";
import closeEye from "../img/eye-close.png";
import openEye from "../img/eye-open.png";

const Login = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, loading, message } = useSelector((state) => state.like);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updatePassword(oldPassword, newPassword));
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
  }, [dispatch, error, alert, message]);

  return (
    <div className="login_containe signup_container">
      <div className="form_container">
        <from className="loginform signupform" onSubmit={submitHandler}>
          <img src={logo} alt="" />
          <h4 className="form_title">Update Password - Quickly</h4>

          <div className="input_box password_input">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Old Password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <img
              src={showPassword ? openEye : closeEye}
              alt="Show password"
              className="eye_icon"
              onClick={togglePasswordVisibility}
            />
          </div>
          <br />
          <div className="input_box password_input">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <img
              src={showPassword ? openEye : closeEye}
              alt="Show password"
              className="eye_icon"
              onClick={togglePasswordVisibility}
            />
          </div>
          <div className="input_data">
            <input
              type="submit"
              value={"Update Password "}
              disabled={loading}
            />
          </div>
        </from>
        <hr />
        {/* <Link to={"/forgetpassword"}>Forget Password ?</Link> */}
        <Link to={"/forgot/password"}>Forget Password ?</Link>
        <hr />
        <center>or</center>
        <Link to={"/signup"}> Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
