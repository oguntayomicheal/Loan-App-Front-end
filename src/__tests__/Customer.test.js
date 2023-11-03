import {render} from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import LoanStatus from '../components/customer/LoanStatus'

describe('Customer loan status page', () => {
    beforeEach(() => {
        localStorage.clear()
       
    })

    test('Renders correctly', () => {
      
        localStorage.setItem('customerData', JSON.stringify({ id: 123 }));

        const loanStatus = render(
            <Router>
                <LoanStatus />
            </Router>
        )
        expect(loanStatus).toMatchSnapshot()
    })


})