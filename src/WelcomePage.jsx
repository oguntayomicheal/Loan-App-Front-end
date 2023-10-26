import React from "react";
import { Link } from 'react-router-dom'

const WelcomePage = () => {
    return <>
        <h1>
            Loan App
        </h1>

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
    
    
    
    </>
}


export default WelcomePage;