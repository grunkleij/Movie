import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault(); // Prevent default form submission

    const data = {
      name,
      email,
      password,
    };

    axios.post('http://localhost:1234/user', data)
      .then(() => {
        console.log('User signed up successfully');
        navigate('/');
      })
      .catch((err) => {
        console.error('Error signing up:', err);
      });
  };

  return (
    <div>
      <div className="container ml">
        <form>
          <div className="form-group">
            <label htmlFor="usernameId">Username</label>
            <input
              type="text"
              className="form-control"
              id="usernameId"
              aria-describedby="username"
              placeholder="Enter username"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button onClick={handleSignup} type="button" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
