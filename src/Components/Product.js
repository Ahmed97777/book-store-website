import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword,onAuthStateChanged, signOut} from 'firebase/auth'
import {auth} from '../firebase-config'

const Product = ({item, handleClick}) => {

    const { bookName, image, price } = item;

    const navigate = useNavigate();

    const [selectedBook, setSelectedBook] = useState(item);

    const handleBookClick = (book) => {
        setSelectedBook(book);
    };

    useEffect(() => {
        console.log(selectedBook);
    }, [item]);


    const sendToBookDetails = () => {
        navigate('/book-details', { state: { selectedBook } });
    };


    const [user, setUser] = useState();

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
        // Notice the empty dependency array, there to make sure the effect is only run once when the component mounts
      }, []) 
     
    return (

        <>
        
            {/* <!-- Product --> */}

                <div className="product"  onClick={() => handleBookClick(item)}>
                    <img   src={process.env.PUBLIC_URL + `${image}`} alt="Product"/>
                    <h3  >{bookName}</h3>
                    <p className="price">{price}$</p>
                    <button className='buttonBookDetails' onClick={sendToBookDetails} >View Book Details</button>
                    {user && <button className='buttonBookDetails add-to-cart' onClick={()=>handleClick(item)} >Add To Cart</button>}
                </div>

        </>

    )

    }

export default Product
