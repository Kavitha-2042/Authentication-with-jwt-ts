import React from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Register from './Components/Register';
import Home from './Components/Home';
import Login from './Components/Login';
import Lpage from './Components/Lpage';
import Rpage from './Components/Rpage';

function App() {

  return (
    <div>
      <h1 className='appHeader'>My Website</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/lpage' element={<Lpage/>}/>
        <Route path = '/rpage' element={<Rpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
