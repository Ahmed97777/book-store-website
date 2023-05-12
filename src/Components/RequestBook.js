import React, { useState } from 'react';

const RequestBook = () => {

    const [bookName, setBookName] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        setBookName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save the book name in a variable or send it to the server using an HTTP request
        console.log('Book name:', bookName);
        setSubmitted(true);
        setBookName('');
    };

return (

    <>
    
        <div>
            <h1 className='request-text' >Request Book</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="book-name">Book Name:</label>
                    <input type="text" id="book-name" value={bookName} onChange={handleInputChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
            {submitted && <p className='feedback-request' >Request book submitted!</p>}
        </div>
    
    
    
    </>

)

}


export default RequestBook
