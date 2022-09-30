import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import Rpage from './Rpage';

const Register = () =>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();
  
    const eventHandler = async (e:any) =>{
      e.preventDefault();
  
      let res = await fetch('http://localhost:5004/register',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({name,email,password})
      })
  
      const result = await res.json()
      console.log(result)
      
      alert(result.message);

//      window.location.reload();

      navigate('/rpage')
      
    }

  return (
    <div className='Register'>
      <h1 id='registerHead'>Register</h1>
      <form action="" className='registerForm'>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={(e: any) => {
            setName(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button onClick={eventHandler}>Submit</button>

       
      </form>

    
    </div>
  );
};

export default Register;
