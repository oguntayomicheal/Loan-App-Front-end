import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const LoanStatus = () => {
  const [loanApplicationsList, setLoanApplicationList] = useState([]);
  const customerData = localStorage.getItem('customerData');
  const customerId = (JSON.parse(customerData)).id;

  const loanUrl = `http://localhost:3100/api/v1/customers/${customerId}/loan_applications`;

  const fetchloanApplicationsList = async () => {
    fetch(loanUrl).then((response) => {
      if (!response.ok) {
        throw new Error('Network response not OK');
      }
      return response.json();
    }).then((data) => {
      setLoanApplicationList(data);
    });
  };

  useEffect(() => {
    fetchloanApplicationsList();
  }, []);

  return (
    <div className='loan_status_page'>
      <NavLink to="/LoanApplicationForm" className="each_nav">
        Application form
      </NavLink>
      <br />
      <div>
        <h2>Loan Status</h2>
        <ul id="allLoans">
          {loanApplicationsList.map((eachLoan) => (
            <li key={eachLoan.id} className="eachLoan">
              <span>
                <p>{eachLoan.loan_amount}</p>
              </span>
              <span>
                <p>Status</p>
                <p>
                  {' '}
                  {eachLoan.status}
                </p>
              </span>
              <span>
                <Link to={`/EachLoanStatus/${eachLoan.id}`}>
                  <button type="button">View</button>
                </Link>

              </span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default LoanStatus;
