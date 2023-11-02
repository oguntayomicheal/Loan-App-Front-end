import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import WelcomePage from './WelcomePage';
import StaffLogin from './components/session/StaffLogin';
import CustomerRegister from './components/session/CustomerRegister';
import CustomerLogin from './components/session/CustomerLogin';
import CustomerHomePage from './components/customer/HomePage';

import LoanApplicationForm from './components/customer/LoanApplicationForm';
import LoanStatus from './components/customer/LoanStatus';
import EachLoanStatus from './components/customer/EachLoanStatus';

import StaffDashBoard from './components/staff/StaffDashBoard';
import ReviewLoanApplication from './components/staff/ReviewLoanApplication';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/customerRegister" element={<CustomerRegister />} />
        <Route path="/CustomerLogin" element={<CustomerLogin />} />
        <Route path="/staffLogin" element={<StaffLogin />} />

        <Route path="/CustomerHomePage" element={<CustomerHomePage />} />

        <Route path="/LoanApplicationForm" element={<LoanApplicationForm />} />

        <Route path="/LoanStatus" element={<LoanStatus />} />
        <Route path="/EachLoanStatus/:id" element={<EachLoanStatus />} />

        <Route path="/StaffDashBoard" element={<StaffDashBoard />} />
        <Route path="/ReviewLoanApplication/:id" element={<ReviewLoanApplication />} />
      </Routes>
    </Router>
  );
}

export default App;
