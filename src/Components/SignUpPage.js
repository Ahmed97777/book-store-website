import React from 'react'

const SignUpPage = () => {

return (

    <>
    
        <div className="signup-container">
            <h1>Create an Account</h1>
            <form>
            <div className="form-group-2">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Enter your full name"/>
            </div>
            <div className="form-group-2">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="Enter your email address"/>
            </div>
            <div className="form-group-2">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter a password"/>
            </div>
            <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <a href="/login-page">Log in</a></p>
        </div>
    
    
    </>
)

}

export default SignUpPage