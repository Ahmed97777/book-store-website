import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BookDetails = () => {

    const location = useLocation();
    const selectedBook = location.state.selectedBook;


    useEffect(() => {
        window.scrollTo(0, 0);
        }, []);


    const commentsList = [
        {
        id: 1,
        user: 'John',
        comment: 'This book was amazing!'
        },
        {
        id: 2,
        user: 'Sarah',
        comment: 'I really enjoyed reading this book.'
        },
        {
        id: 3,
        user: 'Mark',
        comment: 'This book is a must-read!'
        }
    ];


return (

    <>

        <header className='header-of-bookDetails'>
            <h1>Book Details</h1>
        </header>
        <main className='main-of-bookDetails'>
            <div className="book-image-details">
                <img src={process.env.PUBLIC_URL + `${selectedBook.image}`} alt="Product"/>
            </div>
            <div className="book-details">
                <h2>{selectedBook.title}</h2>
                <p>Author: Author Name</p>
                <p>Publisher: Publisher Name</p>
                <p>Publication Date: 01/01/2022</p>
                <p>Price: {selectedBook.price}</p>
                <p>Description: One of the best featured books in the history as it make whoever reads it think and act differently.</p>
            </div>
        </main>

        <section className='comments-section'>
            <h3>Comments Section:</h3>
            <ul>
                {commentsList.map(comment => (
                    <li key={comment.id}>
                        <h4>{comment.user}</h4>
                        <p>{comment.comment}</p>
                    </li>
                ))}
            </ul>
        </section>

    </>

)

}


export default BookDetails
