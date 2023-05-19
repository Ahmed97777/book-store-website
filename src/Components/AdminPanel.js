import React, { useState } from 'react';
import { useEffect } from 'react';

const AdminPanel = () => {

    const [booksList, setBooksList] = useState([
        { title: 'The Way', image: '/book1.png', price: '$75' },
        { title: 'Famous Last Words', image: '/book2.png', price: '$80' },
        { title: 'Book MockUp', image: '/book3.jpg', price: '$50' },
        { title: 'Little Rabbit', image: '/book4.png', price: '$35' },
        { title: 'How To Get Any Job', image: '/book5.jpg', price: '$100' },
    ]);

    const [newBookToSend, setNewBookToSend] = useState({});

    const [newOrderToSend, setNewOrderToSend] = useState({});



    const handleAddBook = () => {
        const title = prompt('Enter the book title:');
        const price = prompt('Enter the book price:');
        const selfLink = prompt('Enter the book selfLink:');
        const stockNum = prompt('Enter the book stockNum:');
    
        if (title && price && selfLink && stockNum) {
        const newBook = { title, price, selfLink, stockNum };
        setNewBookToSend({ title, price, selfLink, stockNum });
        console.log(newBookToSend);
        setBooksList([...booksList, newBook]);
        }
    };

    useEffect(() => {
        console.log(newBookToSend);
        console.log(newOrderToSend);
    }, [newBookToSend,newOrderToSend]);
    

    const handleDeleteBook = (index) => {
        const updatedList = booksList.filter((_, i) => i !== index);
        setBooksList(updatedList);
    };


    // --------------------------------------------------


    const [ordersList, setOrdersList] = useState([
        { orderId: 'The Way', customerId: '/book1.png', orderItems: '$75' },
        { orderId: 'Famous Last Words', customerId: '/book2.png', orderItems: '$80' }
    ]);


    const handleAddOrder = () => {
        const orderId = prompt('Enter the book orderId:');
        const customerId = prompt('Enter the customerId URL:');
        const orderItems = prompt('Enter the book orderItems:');
    
        if (orderId && customerId && orderItems) {
        const newBook = { orderId, customerId, orderItems };
        setNewOrderToSend({ orderId, customerId, orderItems});
        console.log(newOrderToSend);
        setOrdersList([...ordersList, newBook]);
        }
    };
    

    const handleDeleteOrder = (index) => {
        const updatedList = ordersList.filter((_, i) => i !== index);
        setOrdersList(updatedList);
    };





return (

    <>
        <div className='parent-admin-panel' >

            <h1 className="admin-table-label">Books Table</h1>

            

            <table className='admin-books'>
                <thead>
                    <tr>
                        <th>Title</th>
                        {/* <th>Image</th> */}
                        <th>Price</th>
                        {/* <th>Action</th> */}
                        <th><p className='add-book-text' ><button className='add-book-button' onClick={handleAddBook}>Add Book</button></p></th>
                        
                    </tr>
                </thead>
                <tbody>
                    {booksList.map((book, index) => (
                        <tr key={index}>
                            <td>{book.title}</td>
                            {/* <td> */}
                                {/* <img  className='admin-image-books' src={book.image} alt={book.title + " photo"} /> */}
                                {/* <td>{book.image}</td> */}
                            {/* </td> */}
                            <td>{book.price}</td>
                            <td>
                                <button onClick={() => handleDeleteBook(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            

        </div>



        {/* -------------------------------------------------- */}




        <div className='parent-admin-panel' >

            <h1 className="admin-table-label">Orders Table</h1>

            

            <table className='admin-books'>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Customer Id</th>
                        <th>Order Items</th>
                        {/* <th>Action</th> */}
                        <th><p className='add-book-text' ><button className='add-book-button' onClick={handleAddOrder}>Add Order</button></p></th>
                        
                    </tr>
                </thead>
                <tbody>
                    {ordersList.map((book, index) => (
                        <tr key={index}>
                            <td>{book.orderId}</td>
                            {/* <td> */}
                                {/* <img  className='admin-image-books' src={book.image} alt={book.title + " photo"} /> */}
                                <td>{book.customerId}</td>
                            {/* </td> */}
                            <td>{book.orderItems}</td>
                            <td>
                                <button onClick={() => handleDeleteOrder(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className='space' ></div>

        </div>

        
        

    
    </>

)

}


export default AdminPanel
