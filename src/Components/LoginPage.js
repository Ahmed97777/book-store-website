import React from 'react'

const LoginPage = () => {

return (

    <>

        <div className="login-container">
            <h1>Login</h1>
            <form>
            <div className="form-group">
                <label htmlFor="username">Email</label>
                <input type="text" id="username" placeholder="Enter your email"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password"/>
            </div>
            <button type="submit">Log in</button>
            </form>
        </div>
    
    
    </>

)

}

export default LoginPage
