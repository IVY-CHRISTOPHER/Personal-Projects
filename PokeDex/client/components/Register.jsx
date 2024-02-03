import { Link } from 'react-router-dom'
import { useState } from 'react'


const Register = () => {
    return (
        <>
            <div>
                <h1>Register Page</h1>
            </div>
            <div>
                <p>have an Account?</p>
                <Link to={"/login"}>Login</Link>
            </div>
        </>
    )
};

export default Register