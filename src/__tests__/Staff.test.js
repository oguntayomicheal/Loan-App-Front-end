import {render} from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import StaffDashBoard from '../components/staff/StaffDashBoard'
import ReviewLoanApplication from '../components/staff/ReviewLoanApplication'

describe('Staff page', () => {
    beforeEach(() => {
        localStorage.clear()
       
    })

    test('Renders staffDashBoard correctly', () => {
      
        localStorage.setItem('staffData', JSON.stringify({ id: 1 }));

        const staffDashBoard = render(
            <Router>
                <StaffDashBoard />
            </Router>
        )
        expect(staffDashBoard).toMatchSnapshot()
    })

    test('Renders staff loan review page correctly', () => {
      
        localStorage.setItem('staffData', JSON.stringify({ id: 1 }));

        const reviewLoanApplication = render(
            <Router>
                <ReviewLoanApplication />
            </Router>
        )
        expect(reviewLoanApplication).toMatchSnapshot()
    })


})