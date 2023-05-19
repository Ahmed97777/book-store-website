import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
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


    const[allBooksList,setBooks] = useState([]);


    const fetchData = () => {
      
        return fetch("http://localhost:8081/api/v1/book/books")
              .then((response) => response.json())
              .then((data) => {setBooks(data)})
      }
    
      useEffect(() => {
        fetchData()

      },[])


    const handleAddBook = () => {
        
        const title = prompt('Enter the book title:');
        const price = prompt('Enter the book price:');
        const selfLink = prompt('Enter the book selfLink:');
        const stockNum = prompt('Enter the book stockNum:');
        const image = prompt('Enter the book image url:');
    
        if (title && price && selfLink && stockNum&&image) {
        const newBook = { title, price, selfLink, stockNum };
         setNewBookToSend({ "bookName" : title, "price" : Number(price), "selfLink"
        : selfLink, "stockNumber":Number(stockNum),"image":image })
        console.log(newBookToSend);
        setBooksList([...booksList, newBook]);
        window.location.reload(false);
        }
    };

    useEffect(() => {
   
    }, [newBookToSend,newOrderToSend,allBooksList]);
    
    useEffect(()=>{
        
        if(Object.keys(newBookToSend).length>0){
            console.log(newBookToSend);
            axios.post('http://localhost:8081/api/v1/book/saveBook', { 
                "bookName": newBookToSend.bookName,
                "image":newBookToSend.image,
                "price": newBookToSend.price,
                "selfLink":newBookToSend.selfLink,
                "stockNumber":newBookToSend.stockNum
                                    
                                  }).then(setNewBookToSend({}))
        }
    



    },[newBookToSend])

    const handleDeleteBook = (index) => {
        const url = 'http://localhost:8081/api/v1/book/delete/' + index
        axios.delete(url).then(setNewBookToSend({}))
        const updatedList = booksList.filter((_, i) => i !== index);
        setBooksList(updatedList);
        window.location.reload(false);
    };


    // --------------------------------------------------


    const [ordersList, setOrdersList] = useState([
        { orderId: 'The Way', customerId: '/book1.png', orderItems: '$75' },
        { orderId: 'Famous Last Words', customerId: '/book2.png', orderItems: '$80' }
    ]);


    const handleAddOrder = () => {
        // const orderId = prompt('Enter the book orderId:');
        // const customerId = prompt('Enter the customerId URL:');
        // const orderItems = prompt('Enter the book orderItems:');
    
        // if (orderId && customerId && orderItems) {
        // const newBook = { orderId, customerId, orderItems };
        // setNewOrderToSend({ orderId, customerId, orderItems});
        // console.log(newOrderToSend);
        // setOrdersList([...ordersList, newBook]);
        // }
    };
    

    // const handleDeleteOrder = (index) => {
    //     console.log("index");

    // };


    // const register = async () => {
        
    //             try {
    //                 const user =  await axios.post('http://localhost:8081/api/v1/customer', { 
    //                     "id": user.user.uid,
    //                     "email" : registerEmail,
    //                     "firstName": firstName,
    //                     "lastName": lastName,
    //                     "address": address,
    //                     "phone": phone,
                        
    //                   },
    //                   )
    //             } catch (error) {
                    
    //             }
           
            
    //         navigate("/");

        

    // }



return (

    <>
        <div className='parent-admin-panel' >

            <h1 className="admin-table-label">Books Table</h1>

            

            <table className='admin-books'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Title</th>
                        {/* <th>Image</th> */}
                        <th>Price</th>
                        {/* <th>Action</th> */}
                        <th><p className='add-book-text' ><button className='add-book-button' onClick={handleAddBook}>Add Book</button></p></th>
                        
                    </tr>
                </thead>
                <tbody>
                    {allBooksList.map((book, index) => (
                        <tr key={index}>
                            <td>{book.id}</td>
                            <td>{book.bookName}</td>
                            {/* <td> */}
                                {/* <img  className='admin-image-books' src={book.image} alt={book.title + " photo"} /> */}
                                {/* <td>{book.image}</td> */}
                            {/* </td> */}
                            <td>{book.price}</td>
                            <td>
                                <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            

        </div>



        {/* -------------------------------------------------- */}



{/* 
        <div className='parent-admin-panel' >

            <h1 className="admin-table-label">Orders Table</h1>

            

            <table className='admin-books'>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Customer Id</th>
                        <th>Order Items</th> */}
                        {/* <th>Action</th> */}
                        {/* <th><p className='add-book-text' ><button className='add-book-button' onClick={handleAddOrder}>Add Order</button></p></th> */}
                        
                    {/* </tr>
                </thead>
                <tbody>
                    {ordersList.map((book, index) => (
                        <tr key={index}>
                            <td>{book.orderId}</td> */}
                            {/* <td> */}
                                {/* <img  className='admin-image-books' src={book.image} alt={book.title + " photo"} /> */}
                                {/* <td>{book.customerId}</td> */}
                            {/* </td> */}
                            {/* <td>{book.orderItems}</td>
                            <td>
                                <button onClick={() => handleDeleteOrder(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className='space' ></div>

        </div> */}

        
        

    
    </>

)

}


export default AdminPanel
