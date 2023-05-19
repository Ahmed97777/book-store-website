import {React, useEffect, useState} from 'react'
import {createUserWithEmailAndPassword,onAuthStateChanged, signOut} from 'firebase/auth'
import {auth} from '../firebase-config'
import { useNavigate } from "react-router-dom";
import { UserContext } from '../App';
const HeaderNavbar = () => {
    
    const [user, setUser] = useState();

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
        // Notice the empty dependency array, there to make sure the effect is only run once when the component mounts
      }, []) 
    

    const logout = async () => {
        
    
        await signOut(auth);
    }
    return (



    <>
        <nav className='headerNav'>
            <div className="headerLogo">
                <a href="/">Book Store</a>
            </div>
            <div className="headerUser">
                <a href='/all-books' ><button type="submit" >All Books</button></a>
                <a href='/request-book' ><button type="submit" >Request Book</button></a>
                { !user && <a href='/login-page' ><button type="submit">Login</button></a>}
                { !user && <a href='/signUp-page' ><button type="submit">Sign Up</button></a>}
                { user && <button onClick={logout}>logout</button>}
     
            </div>
        </nav>
    </>

    )
    
}

export default HeaderNavbar
