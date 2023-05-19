import React, { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';

const BookDetails = () => {

  

    const location = useLocation();
    const selectedBook = location.state.selectedBook;

    const [books,setBooks] = useState({});
    const [isBook,setIsBook] = useState(false);
    const fetchData = () => {
  
        return fetch(selectedBook.selfLink)
              .then((response) => response.json())
              .then((data) => {setBooks(data)})
            
      }
    
      useEffect(() => {
        console.log(selectedBook);
        fetchData()
        
      },[])
  
        useEffect(() => {

            if (Object.keys(books).length>0){
                setIsBook(true);
            }else{
                setIsBook(false);
            }
       
        },[books])

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
                <h2>{selectedBook.bookName}</h2>
                <p>Author: {isBook?books.volumeInfo.authors:"None"} </p> 
                <p>Publisher: {isBook?books.volumeInfo.publisher:"None"}</p>
                <p>Publication Date: {isBook?books.volumeInfo.publishedDate:"None"}</p>
                <p>Price: ${selectedBook.price}</p>
                <p>Description: {isBook?books.volumeInfo.description:"None"}</p>
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
