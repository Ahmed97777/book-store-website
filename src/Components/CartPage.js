import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        }, []);

    const location = useLocation();
    const cart = location.state.cart;
    console.log("this is the cart page babyyy : ");
    console.log(cart);


    const totalPrice = cart.reduce((total, item) => {
        const price = Number(item.price.replace(/\$/g, ''));
        return total + price;
    }, 0);


    const navigate = useNavigate();

    const makeAlert = () => {
        alert('Order submitted!');
        navigate('/');
    };

    
    


return (

    <>

        <h1 className='cart-text' >This is the Cart page</h1>
        <ol className="cart-items">
            {cart.map((item, index) => (
                <li key={index}><p>{item.title}</p> <p>{item.price}</p></li>
            ))}
        </ol>
        <p className='total-price' >Total Price: <span>${totalPrice.toFixed(2)}</span> </p>
        
        <button className='make-order-text2'  onClick={makeAlert}>Make the Order</button>

        
    
    </>

)

}


export default CartPage