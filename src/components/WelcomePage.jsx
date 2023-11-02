import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => (
  <div id="welcome_page" className="main_content">
    <h1>
      Loan App
    </h1>

    <div className="welcome_links">
      <Link to="/staffLogin">
        Staff Login
      </Link>

      <br />

      <Link to="/CustomerLogin">
        Customer Login
      </Link>

      <br />

      <Link to="/customerRegister">
        Customer Register
      </Link>
    </div>

  </div>
);

export default WelcomePage;
