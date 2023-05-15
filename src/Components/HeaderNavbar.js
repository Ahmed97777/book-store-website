import React from 'react'

const HeaderNavbar = () => {


    return (

    <>
    
        <nav className='headerNav'>
            <div className="headerLogo">
                <a href="/">Book Store</a>
            </div>
            <div className="headerUser">
                <a href='/all-books' ><button type="submit" >All Books</button></a>
                <a href='/request-book' ><button type="submit" >Request Book</button></a>
                <a href='/login-page' ><button type="submit">Login</button></a>
                <a href='/signUp-page' ><button type="submit">Sign Up</button></a>
                
                
            </div>
        </nav>
    
    </>

    )
    
}

export default HeaderNavbar
