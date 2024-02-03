import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
    return (
        <>
            <div>
                <h1>Login Page</h1>
            </div>
            <div>
                <p>Don't have an Account?</p>
                <Link to={"/register"}>Register</Link>
            </div>
        </>
    )
};

export default Login