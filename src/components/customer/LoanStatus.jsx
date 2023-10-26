import React from 'react';
import { NavLink } from 'react-router-dom';
import CustomerNavigation from './Navigation';

const LoanStatus = () => (
  <>
    <NavLink to="/LoanApplicationForm" className="each_nav">
      Application form
    </NavLink>
    <br />

    LoanStatus
  </>
);

export default LoanStatus;
