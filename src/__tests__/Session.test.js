import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import CustomerLogin from '../components/session/CustomerLogin';
import CustomerRegister from '../components/session/CustomerRegister';
import StaffLogin from '../components/session/StaffLogin';

describe('Session pages renders correctly', () => {
  test('for Customer Login page', () => {
    const customerLogin = render(
      <Router>
        <CustomerLogin />
      </Router>,
    );

    expect(customerLogin).toMatchSnapshot();
  });

  test('for Customer Registration page', () => {
    const customerRegistration = render(
      <Router>
        <CustomerRegister />
      </Router>,
    );

    expect(customerRegistration).toMatchSnapshot();
  });

  test('for Staff Login page', () => {
    const staffLogin = render(
      <Router>
        <StaffLogin />
      </Router>,
    );

    expect(staffLogin).toMatchSnapshot();
  });
});
