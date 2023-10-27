import React, { useState, useEffect } from 'react';

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
        <>
        Staff dashboard
        </>
    )
} 


export default StaffDashBoard;