import React from "react";
import { NavLink } from 'react-router-dom';

const CustomerNavigation = () => {
    
    
    return <>
    CustomerNavigation

    <NavLink to="/LoanApplicationForm" className="each_nav">
        Application form
      </NavLink>


      <NavLink to="/LoanStatus" className="each_nav">
        Loan status
      </NavLink>


    </>
}

export default CustomerNavigation;