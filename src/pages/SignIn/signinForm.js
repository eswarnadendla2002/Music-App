import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signinstyles.css";
import FontAwesome from "react-fontawesome";
import { Alert } from "react-st-modal";
import { Dialog } from "./dialog";
const SigninForm = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //   const passwordFirst = useRef("");
  //   const passwordConfirm = useRef("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const PasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const ConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };
  const data = {
    name: name,
    username: username,
    email: email,
    password: password,
    // confirmPassword: confirmPassword,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log(data);
      const result = Alert(
        "Redirected to Login page",
        "Created Account Successfully..!"
      );
      navigate("/");
      setName("");
      setUsername("");
      setConfirmPassword("");
      setPassword("");
      setEmail("");
    } else {
      setError("Password doesn't matched!");
    }
  };
  return (
    <>
      <div className="signin">
        <div className="wrapper">
          <h2>Create Account</h2>
          <form onSubmit={submitHandler}>
            <div className="input-box">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="text"
                id="username"
                value={name}
                onChange={nameHandler}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="text"
                id="username"
                value={username}
                onChange={usernameHandler}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={emailHandler}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Create password"
                name="password"
                value={password}
                onChange={PasswordHandler}
                required
              />
              {/* <FontAwesome className="eye" icon="fa-regular fa-eye" /> */}
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={ConfirmPasswordHandler}
                required
              />
            </div>
            <p className="error">{error}</p>

            <div className="input-box button">
              <input type="submit" value="Sign Up" />
            </div>
            <div className="text">
              <h3>
                Already have an account? <Link to="#">Login now</Link>
              </h3>
            </div>
          </form>
        </div>
        {/* <Dialog dialog={dialog} /> */}
      </div>
    </>
  );
};

export default SigninForm;
