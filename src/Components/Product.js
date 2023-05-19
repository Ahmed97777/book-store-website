import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

    return (

        <>
        
            {/* <!-- Product --> */}

                <div className="product"  onClick={() => handleBookClick(item)}>
                    <img   src={process.env.PUBLIC_URL + `${image}`} alt="Product"/>
                    <h3  >{bookName}</h3>
                    <p className="price">{price}$</p>
                    <button className='buttonBookDetails' onClick={sendToBookDetails} >View Book Details</button>
                    <button className='buttonBookDetails add-to-cart' onClick={()=>handleClick(item)} >Add To Cart</button>
                </div>

        </>

    )

    }

export default Product
