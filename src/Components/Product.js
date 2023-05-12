import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import BookDetails from './BookDetails';

const Product = (props) => {

    const navigate = useNavigate();

    const [selectedBook, setSelectedBook] = useState("");

    const handleBookClick = (book) => {
        setSelectedBook(book);
        setSelectedBook(book);
        console.log(selectedBook);
    };


    const sendToBookDetails = () => {
        handleBookClick();
        // navigate('/book-details');
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
                    {/* <a href="/" className="btn">Order Book</a> */}
                </div>
                {/* <BookDetails title={props.title} image={props.image} price={props.price} /> */}


            {/* <Link className='link-to-details' to={{
                pathname: '/book-details'
                }}>
                <div className="product">
                    <img src={process.env.PUBLIC_URL + `${props.image}`} alt="Product"/>
                    <h3>{props.title}</h3>
                    <p className="price">{props.price}</p>
                    <a href="/" className="btn">Order Book</a>
                </div>
                {/* <BookDetails title={props.title} image={props.image} price={props.price} /> */}
            {/* </Link> */}


            {/* <div className="product">
                <img src={process.env.PUBLIC_URL + `${props.image}`} alt="Product"/>
                <h3>{props.title}</h3>
                <p className="price">{props.price}</p>
                <a href="/" className="btn">Order Book</a>
            </div> */}

        </>

    )

    }

export default Product
