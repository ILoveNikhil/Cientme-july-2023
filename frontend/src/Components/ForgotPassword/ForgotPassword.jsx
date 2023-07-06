import React, { useEffect, useState } from "react";
import logo from "../img/logo.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { forgotPassword } from "../../Actions/User";
// import "./ForgotPassword.css";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();
  const { error, loading, message } = useSelector((state) => state.like);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
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
        <from className="loginform signupform" onSubmit={submitHandler}>
          <img src={logo} alt="" />
          <h4 className="form_title">
            Forget Password <br /> Don't Worry <br /> Enter Your Account Email
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
          <div className="input_data">
            <input disabled={loading} type="submit" value={"Send Mail"} />
          </div>
        </from>

        <hr />
        <center>or</center>
        <Link to={"/login"}> Log In</Link>
      </div>
    </div>
  );
};

export default ForgetPassword;
