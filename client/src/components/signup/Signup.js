import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from "../../JS/actions/user"
import { useHistory, Link } from "react-router-dom"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import "./Signup.css"

const Signup = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

    const handleClick = () => {
        dispatch(registerUser({ name, email, phone, password }, history));
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
    }

    return (
      <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          value={name} onChange={(e) => setName(e.target.value)}
        /><label>Phone</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          value={phone} onChange={(e) => setPhone(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          value={email} onChange={(e) => setEmail(e.target.value)}
        />
         
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          value={password} onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit"  onClick={handleClick}>
          Register
        </button>
      </form>
      <div class='icon'>  <Link to="/"> <ArrowBackIcon/> </Link></div>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
       <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>
    </div>
    )
}

export default Signup
