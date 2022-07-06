import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './Profile'
import Registerpage from './Registerpage'
import Loginpage from './Loginpage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Loginpage />} />
      <Route path="/Loginpage" element={<Loginpage />} />
      <Route path="/Registerpage" element={<Registerpage />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
