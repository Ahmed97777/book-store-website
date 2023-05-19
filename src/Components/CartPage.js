import React, { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {createUserWithEmailAndPassword,onAuthStateChanged, signOut} from 'firebase/auth'
import {auth} from '../firebase-config'
import qs from "qs";

const CartPage = () => {

    const [user, setUser] = useState();

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
        // Notice the empty dependency array, there to make sure the effect is only run once when the component mounts
      }, []) 
    
    useEffect(() => {
        window.scrollTo(0, 0);
        }, []);

    const location = useLocation();
    const cart = location.state.cart;
    console.log("this is the cart page babyyy : ");
   


    const totalPrice = cart.reduce((total, item) => {
 
        // const price = Number(item.price.replace(/\$/g, ''));
        const price = item.price;
        return total + price;
    }, 0);

    var booksId = ""

    const navigate = useNavigate();

    const makeOrder = () => {
        

        cart.forEach(element => {
            booksId+=element.id+","
        });
        booksId = booksId.substring(0, booksId.length - 1)
       console.log(booksId);
        
  
        alert('Order submitted!');
        navigate('/');

        axios.post('http://localhost:8081/api/v1/order/create', null, { params: {
            "customerId": user.uid,
            "bookId" : booksId,
            "quantity": 12
          },
          })
          .then((response) => {
            console.log(response.data);
              // Handle data
          })
          .catch((error) => {
            console.log(error);
          })
    };

    
    


return (

    <>

        <h1 className='cart-text' >This is the Cart page</h1>
        <ol className="cart-items">
            {cart.map((item, index) => (
                <li key={index}><p>{item.bookName}</p> <p>${item.price}</p></li>
            ))}
        </ol>
        <p className='total-price' >Total Price: <span>${totalPrice.toFixed(2)}</span> </p>
        
        <button className='make-order-text2'  onClick={makeOrder}>Make the Order</button>

        
    
    </>

)

}


export default CartPage