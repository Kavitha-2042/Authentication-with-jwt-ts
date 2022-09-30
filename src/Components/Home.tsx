import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='Home'>
      
        <Link to = "/register" className='homeRegister'>Register</Link>
        <Link to = "/login" className='homeLogin'>Login</Link>
    </div>
  )
}

export default Home