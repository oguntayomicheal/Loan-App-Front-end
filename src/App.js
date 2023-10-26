import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import WelcomePage from './WelcomePage';
import StaffLogin from './components/session/StaffLogin';
import CustomerRegister from './components/session/CustomerRegister';
import CustomerLogin from './components/session/CustomerLogin';
import CustomerHomePage from './components/customer/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/customerRegister" element={<CustomerRegister />} />
        <Route path="/CustomerLogin" element={<CustomerLogin />} />
        <Route path="/staffLogin" element={<StaffLogin />} />
      
        <Route path="/CustomerHomePage" element={<CustomerHomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
