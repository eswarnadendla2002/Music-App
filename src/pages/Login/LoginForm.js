// components/LoginForm.js

import React, { useState } from "react";
import "./loginStyles.css";
import { Link } from "react-router-dom";
const LoginForm = (props) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const usernameHandler = (e) => {
    setUserName(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const data = {
    username: username,
    password: password,
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <section className="login" id="login">
      <div className="head">
        <h1 className="company">Listen Music..!</h1>
      </div>
      <p className="msg">Welcome back to VibeVerse</p>
      <div className="form">
        <form>
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
          <br />
          <input
            type="password"
            name="password"
            placeholder="••••••••••••••"
            className="password"
            onChange={passwordHandler}
            value={password}
          />
          <br />
          <Link
            to="#"
            className="btn-login"
            id="do-login"
            onClick={handleClick}
          >
            {" "}
            Login
          </Link>

          <Link to="#" className="forgot">
            Forgot Password?
          </Link>
        </form>
        <Link to="/signup" className="account">
          Create New Account?
        </Link>
      </div>
      {/* <audio controls src={props.data} /> */}
    </section>
  );
};

export default LoginForm;
