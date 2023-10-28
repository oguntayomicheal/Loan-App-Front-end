import React, { useState, useEffect } from 'react';
import './StaffDashBoard.css'

const StaffDashBoard = () => {
    const [loanApplicationsList, setLoanApplicationList] = useState([]);


    useEffect(() => {
        fetchloanApplicationsList()        
    }, [])

    const loanUrl = 'http://localhost:3100/api/v1/staffs/loan_applications';
    
    const fetchloanApplicationsList = async () => {

        fetch(loanUrl).then((response) => {
            if(!response.ok) {
                throw new Error('Network response not OK')
            }
            return response.json()
        }).then((data) => {
            setLoanApplicationList(data)
        })
    }

    return (
        <div id='staffDashBoard'>
        Staff dashboard
        <h2>Loan Applications</h2>
        <ul id='allLoans'>
            {loanApplicationsList.map((eachLoan) => (
                <li key={eachLoan.id} className='eachLoan'>
                    <span>
                        <p>{eachLoan.customer_name}</p>
                        <p>{eachLoan.loan_amount}</p>
                    </span>
                    <span>
                        <p>Status</p>
                        <p> {eachLoan.status}</p>
                    </span>
                    <span>
                        <button>Review</button>
                    </span>
                </li>
            ))}
        </ul>
        </div>
    )
} 


export default StaffDashBoard;