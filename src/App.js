import { useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import { CustomContext } from './Components/Context';
import {Routes, Route, Navigate, useNavigate} from "react-router-dom"
import Home from './Components/Home';
import Technologies from './Components/Technologies';
import About from './Components/About';
import Contact from './Components/Contact';
import Product from './Components/Product';
import Productdetails from './Components/Productdetails';
import Html from './Components/Html';
import React from './Components/React';
import Javascript from './Components/Javascript';
import Css from './Components/Css';
import Protect from './Components/Protect';


function App() {
  const {state} = CustomContext()
  const navigate = useNavigate()
  return (
    <div className="App">


      {state ? <><Navbar/></> : null}
      <Routes>
      <Route path='/' element={state ? <Home/> : <Login/>}/>
        <Route path='/home' element={<Protect><Home/></Protect>}/>
        <Route path='/tech' element={<Protect><Technologies/></Protect>}>
          <Route path='' element={<Navigate to="html"/>}/>
          <Route path='html' element={<Protect><Html/></Protect>}/>
          <Route path='css' element={<Protect><Css/></Protect>} />
          <Route path='js' element={<Protect><Javascript/></Protect>}/>
          <Route path='react' element={<Protect><React/></Protect>}/>
        </Route>
        <Route path='/about' element={<Protect><About/></Protect>}/>
        <Route path='/contact' element={<Protect><Contact/></Protect>}/>
        <Route path='/product' element={<Protect><Product/></Protect>}/>
        <Route path='/productdetails/:id' element={<Protect><Productdetails/>`</Protect>}/>
      </Routes>

    </div>
  );
}

export default App;
