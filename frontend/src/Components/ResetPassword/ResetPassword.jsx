import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { resetPassword } from "../../Actions/User";
import logo from "../img/logo.jpg";
import "./ResetPassword.css";
const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useDispatch();
  const alert = useAlert();
  const params = useParams();
  const { error, loading, message } = useSelector((state) => state.like);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(resetPassword(params.token, newPassword));
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
              type="password"
              placeholder="New Password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="input_data">
            <input disabled={loading} type="submit" value={"Reset Password"} />
          </div>
        </from>

        <hr />
        <center>or</center>
        <Link to="/forgot/password">Request Another Mail Link</Link>
        <hr />
        <center>or</center>
        <Link to={"/login"}> Log In</Link>
      </div>
    </div>
  );
};

export default ResetPassword;
