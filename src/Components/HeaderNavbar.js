import React from 'react'

const HeaderNavbar = () => {

    return (

    <>
    
        <nav className='headerNav'>
            <div className="headerLogo">
                <a href="/">Book Store</a>
            </div>
            <div className="headerUser">
                <button type="submit">Login</button>
                <button type="submit">Sign Up</button>
            </div>
        </nav>
    
    </>

    )
    
}

export default HeaderNavbar
