import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RequestBook = () => {
    const navigate = useNavigate();
    const [bookName, setBookName] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        setBookName(e.target.value);
    };

    const handleSubmit = (e) => {

      

        const url = 'http://localhost:8081/api/v1/book/request/' + bookName
        axios.post(url)
        navigate("/");

    };

return (

    <>
    <div className='divCont2'>
    <div className='divCont'>
            <h1 className='request-text' >Request Book</h1>
            <div  className='form-request' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="book-name">Book Name:</label>
                    <input type="text" placeholder='ex: Harry Potter' id="book-name" value={bookName} onChange={handleInputChange} />
                </div>
                <button onClick={handleSubmit} type="submit">Submit</button>
            </div>
            {submitted && <p className='feedback-request' >Request book submitted!</p>}
        </div>
    
    </div>
        
    </>

)

}

export default RequestBook
