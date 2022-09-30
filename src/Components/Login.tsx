import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import Lpage from "./Lpage";
import axios from "axios";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const eventHandler = async (e: any) => {
    e.preventDefault();

    let res = axios.post("http://localhost:5004/login",{
      email,
      password
    })
    .then(response=>{
      console.log(response.data)
      localStorage.setItem("jwt-token",response.data.token)
      navigate("/lpage");
    alert(response.data.message);
    })
    .catch(err=>console.log(err))
    

    
    

  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={eventHandler}>
        <input
          type="text"
          placeholder="email"
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" placeholder="submit" />
      </form>
    </div>
  );
};

export default Login;
