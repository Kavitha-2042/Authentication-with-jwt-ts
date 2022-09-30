import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const Lpage = () => {
  const navigate = useNavigate();
useEffect(() => {
 let token=localStorage.getItem("jwt-token") ;
 if(token){
  fetch('http://localhost:5004/home',{
    headers:{
      "jwt-token":token
    }
  }).then(response=>{
  
    return response.json()
  }).then(complete=>{
    console.log(complete)
  })
 }else{
  navigate('/')
 }
  
}, []);

  return (
    <div>
        <h1>Lpage</h1>
    </div>
  )
}

export default Lpage