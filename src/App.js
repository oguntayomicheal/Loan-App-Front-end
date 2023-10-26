import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import WelcomePage from './WelcomePage';
// import StaffLogin from './components/session/StaffLogin';
import CustomerRegister from './components/session/CustomerRegister';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/customerRegister' element={<CustomerRegister />} />

        {/* <Route path='/staffLogin' element={<StaffLogin />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
