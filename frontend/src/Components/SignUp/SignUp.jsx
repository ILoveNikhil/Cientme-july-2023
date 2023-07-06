import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../Actions/User";
import { useAlert } from "react-alert";
import logo from "../img/logo.jpg";
import closeEye from "../img/eye-close.png";
import openEye from "../img/eye-open.png";

const Register = () => {
  const [email, setEmail] = useState("");
  // const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error } = useSelector((state) => state.user);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAvatar(Reader.result);
      }
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerUser(name, email, password, avatar));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }
  }, [dispatch, error, alert]);

  return (
    <div className="signup_container">
      <div className="form_container">
        <form className="signupform" onSubmit={submitHandler}>
          <img src={logo} alt="" />
          <h4 className="form_title">Sign Up to experience cientme</h4>

          <Avatar
            src={avatar}
            alt="User"
            style={{ marginLeft: "5rem" }}
            sx={{ height: "10vmax", width: "10vmax" }}
          />

          <input type="file" accept="image/*" onChange={handleImageChange} />

          {/* Email */}
          <div className="input_box">
            <input
              type="Email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          {/* username */}
          {/* <div className="input_box">
            <input
              type="text"
              placeholder="Username"
              required
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div> */}
          {/* Full Name */}
          <div className="input_box">
            <input
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          {/* Password */}
          <div className="input_box password_input">
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <img
              src={showPassword ? openEye : closeEye}
              alt="Show password"
              className="eye_icon"
              onClick={togglePasswordVisibility}
            />
          </div>
          {/* Submit Form  */}
          <div className="input_data">
            <input type="submit" value={"Sign Up"} disabled={loading} />
          </div>
        </form>
        <hr />
        <center>or</center>
        <Link to={"/login"}>Log In</Link>
      </div>
    </div>
  );
};

export default Register;
