import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import BookDetails from './BookDetails';

const Product = (props) => {

    const navigate = useNavigate();

    const [selectedBook, setSelectedBook] = useState(props);

    const handleBookClick = (book) => {
        setSelectedBook(book);
        // console.log(selectedBook);
    };

    useEffect(() => {
        // console.log('Selected book changed:', selectedBook);
    }, [selectedBook]);


    const sendToBookDetails = () => {
        navigate('/book-details', { state: { selectedBook } });
    };


    return (

        <>
        
            {/* <!-- Product --> */}

                <div className="product"  onClick={() => handleBookClick(props)}>
                    <img   src={process.env.PUBLIC_URL + `${props.image}`} alt="Product"/>
                    <h3  >{props.title}</h3>
                    <p className="price">{props.price}</p>
                    <button className='buttonBookDetails' onClick={sendToBookDetails} >View Book Details</button>
                </div>



        </>

    )

    }

export default Product
