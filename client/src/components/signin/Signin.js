import React, { useState } from "react";
import { loginUser } from "../../JS/actions/user";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import "./Signin.css";

const Signin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }, history));
    setEmail("");
    setPassword("");
  };
  return (
     <div className="login">
     
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
              type="email"
              className="loginInput"
              name="email"
              placeholder="Email"
              tabIndex={1}
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
        <label>Password</label>
        <input
              type="text"
              className="loginInput"
              name="password"
              placeholder="Password"
              tabIndex={2}
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
        <button className="loginButton" type="submit" defaultValue="Log In">
          Login
        </button>
      </form>
      <div class='icon'>  <Link to="/"> <ArrowBackIcon/> </Link></div>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
      
    </div>
  );
};

export default Signin;
