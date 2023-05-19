import {React, useState, useEffect} from 'react'
import {createUserWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'
import {auth} from '../firebase-config'
import { useNavigate } from "react-router-dom";
const SignUpPage = () => {
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")

    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")

    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")

   

    const [user, setUser] = useState({});
    const navigate = useNavigate();
 
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
        // Notice the empty dependency array, there to make sure the effect is only run once when the component mounts
      }, []) 
  
    const register = async () => {
        

        try {
            const user =  await createUserWithEmailAndPassword(
            auth,registerEmail,registerPassword
            );
            navigate("/");

        } catch (error) {
            console.log("error message is : "+error.message);
        }

    }
return (

    <>
    
        <div className="signup-container">
            <h1>Create an Account</h1>
          
            {user?user.email:""}
            <div className="form-group-2">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="Enter your email address"
                    onChange={(event) => {
                    setRegisterEmail(event.target.value);
                  }}
                />
            </div>
            <div className="form-group-2">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter a password"
                    onChange={(event) => {setRegisterPassword(event.target.value)}}

                />
            </div>
            <div className="form-group-2">
                <label htmlFor="email">First Name</label>
                <input type="text" id="email" placeholder="Enter your First Name"
                    onChange={(event) => {
                        setfirstName(event.target.value);
                  }}
                />
            </div>
            <div className="form-group-2">
                <label htmlFor="email">Last Name</label>
                <input type="text" id="email" placeholder="Enter your Last Name"
                    onChange={(event) => {
                        setlastName(event.target.value);
                  }}
                />
            </div>
            <div className="form-group-2">
                <label htmlFor="email">Phone</label>
                <input type="number" id="email" placeholder="Enter your Phone"
                    onChange={(event) => {
                        setPhone(event.target.value);
                  }}
                />
            </div>
            <div className="form-group-2">
                <label htmlFor="email">Address</label>
                <input type="text" id="email" placeholder="Enter your Address"
                    onChange={(event) => {
                        setAddress(event.target.value);
                  }}
                />
            </div>
            <button onClick={register}>Sign Up</button>
        
            <p>Already have an account? <a href="/login-page">Log in</a></p>
        </div>
    
    
    </>
)

}

export default SignUpPage