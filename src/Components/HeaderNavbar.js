import React from 'react'
// import { Link } from "react-router-dom"

const HeaderNavbar = () => {

    return (

    <>
    
        <nav className='headerNav'>
            <div className="headerLogo">
                <a href="/">Book Store</a>
            </div>
            {/* <div className="headerSearch">
                <input type="text" placeholder="Search..."/>
                <button type="submit">Search</button>
            </div> */}
            <div className="headerUser">
                <button type="submit">Login</button>
                <button type="submit">Sign Up</button>
            </div>
        </nav>
    
    </>

    )
    
}

export default HeaderNavbar
