import {signInWithEmailAndPassword } from 'firebase/auth'
import {React, useState} from 'react'
import { useNavigate } from "react-router-dom";
import {auth} from '../firebase-config'
const LoginPage = () => {

  

    const [LoginEmail, setLoginEmail] = useState("")
    const [LoginPassword, setLoginPassword] = useState("")

    const navigate = useNavigate();
 
    const login = async () => {
        

        try {
            const user =  await signInWithEmailAndPassword(
            auth,LoginEmail,LoginPassword
            );
            
            navigate("/");
            

        } catch (error) {
            console.log("error message is : "+error.message);
        }

    }
  

return (

    <>

        <div className="login-container">
            <h1>Login</h1>
     
            <div className="form-group">
                <label htmlFor="username">Email</label>
                <input type="text" id="usernam2" placeholder="Enter your email"
                   onChange={(event) =>{setLoginEmail(event.target.value)}}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password2" placeholder="Enter your password"
            onChange={(event) =>{setLoginPassword(event.target.value)}}

                />
            </div>
            <button onClick={login}>Log in</button>
        
        </div>
    
    
    </>

)

}

export default LoginPage
