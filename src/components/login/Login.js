import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../context/LoginContext'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const {token,setToken} = useContext(LoginContext)
  const navigate=useNavigate();


  const handleLogin = ()=>{
    
    axios.get(`http://localhost:1234/user/${email}`)
    .then((res)=>{
      console.log(res.data[0].password)
      if(password===res.data[0].password){
        console.log('successful login');
        setToken(res.data[0]);
        console.log(token);
        navigate('/')
      }
      else{
        console.log("password not matching")
      }
    })
    .catch((err)=>{
      console.log('email doesnt exists',err);
    })
  }

  useEffect(() => {
    localStorage.setItem('token', JSON.stringify(token));
  }, [token]);
  
  return (
    <div>
      <div className="container ml">
        <form>
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

          <button onClick={handleLogin} type="button" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
