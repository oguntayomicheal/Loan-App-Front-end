import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoanStatus from '../components/customer/LoanStatus';
import LoanApplicationForm from '../components/customer/LoanApplicationForm';

describe('Customer page', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('Renders loan status correctly', () => {
    localStorage.setItem('customerData', JSON.stringify({ id: 123 }));

    const loanStatus = render(
      <Router>
        <LoanStatus />
      </Router>,
    );
    expect(loanStatus).toMatchSnapshot();
  });

  test('Renders application form correctly', () => {
    localStorage.setItem('customerData', JSON.stringify({ id: 123 }));

    const loanApplicationForm = render(
      <Router>
        <LoanApplicationForm />
      </Router>,
    );
    expect(loanApplicationForm).toMatchSnapshot();
  });
});
