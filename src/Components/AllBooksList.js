import React, { useState } from 'react';
import { useEffect } from 'react';
import Product from './Product';
import { useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword,onAuthStateChanged, signOut} from 'firebase/auth'
import {auth} from '../firebase-config'

    const AllBooksList = () => {

        const ss = 
        [
        {title:"The Way", image:"/book1.png", price:"$75"},
        {title:"Famous Last Words", image:"/book2.png", price:"$80"},
        {title:"Book MockUp", image:"/book3.jpg", price:"$50"},
        {title:"Little Rabbit", image:"/book4.png", price:"$35"},
        {title:"How To Get Any Job", image:"/book5.jpg", price:"$100"},
        {title:"Who Gets Promoted", image:"/book6.jpg", price:"$120"},
        {title:"Secrets of Winning", image:"/book7.jpg", price:"$90"},
        {title:"The Ultimate Interview", image:"/book8.jpg", price:"$150"},
        {title:"Jobs to be Done", image:"/book9.png", price:"$85"},
        {title:"The Leader", image:"/book10.jpg", price:"$55"},
        {title:"Seven Ancient", image:"/book11.jpg", price:"$78"},
        {title:"Temple", image:"/book13.jpg", price:"$99"}
    ]

    const[allBooksList,setBooks] = useState([]);


const fetchData = () => {
  
    return fetch("http://localhost:8081/api/v1/book/books")
          .then((response) => response.json())
          .then((data) => {setBooks(data)})
  }

  useEffect(() => {
    fetchData()
    .then(setFilteredBooks(allBooksList));
  },[])
  
  useEffect(() => {
   
    setFilteredBooks(allBooksList);
  },[allBooksList])

    


    const [cart, setCart] = useState([]);

    const handleClick = (item) => {
        setCart([...cart,item]);
        console.log("the complete cart : ");
        console.log(cart);
        alert('Book Added To Cart');
    };

    useEffect(() => {
        console.log("the complete cart : ");
        console.log(cart);
    }, [cart]);


    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBooks, setFilteredBooks] = useState(allBooksList);

 
    
    const handleSearch = (event) => {
        console.log(event.target.value);
        if (event.target.value === '') {
        setFilteredBooks(allBooksList);
        } else {
        const filtered = allBooksList.filter((book) =>
            book.bookName.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setFilteredBooks(filtered);
        }
    };


    const navigate = useNavigate();

    const sendNowCart = () => {
        navigate('/cart-page', { state: { cart } });
    };


    const [user, setUser] = useState();

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
        // Notice the empty dependency array, there to make sure the effect is only run once when the component mounts
      }, []) 
    

return (

    <>

        <div className='search-box'>
                <input placeholder='Search...' type="text" onChange={handleSearch} />
                {/* <button className='search-box-button' onClick={handleSearch}>Search</button> */}
               { user && <button  onClick={sendNowCart} className='go-cart-mode' >Go To Cart </button>}
        </div>

        <div className="product-list" >
                {filteredBooks.map((item, i)=> {
                                return (
                                    <Product  key={i} item={item} handleClick={handleClick}  />
                                )
                            })
                }
        </div>


        

    </>

)

}


export default AllBooksList
