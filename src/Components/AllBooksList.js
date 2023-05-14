import React, { useState } from 'react';
import { useEffect } from 'react';
import Product from './Product';
import { useNavigate } from 'react-router-dom';


    const AllBooksList = () => {

        const allBooksList = [{title:"The Way", image:"/book1.png", price:"$75"},
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

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };
    
    const handleSearch = () => {
        if (searchTerm === '') {
        setFilteredBooks(allBooksList);
        } else {
        const filtered = allBooksList.filter((book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBooks(filtered);
        }
    };


    const navigate = useNavigate();

    const sendNowCart = () => {
        navigate('/cart-page', { state: { cart } });
    };


return (

    <>

        <div className='search-box'>
                <input type="text" onChange={handleInputChange} />
                <button onClick={handleSearch}>Search</button>
        </div>

        {filteredBooks.map((item, i)=> {
                        return (
                            <Product  key={i} item={item} handleClick={handleClick}  />
                        )
                    })
        }

        
        <h4  onClick={sendNowCart} className='go-text' >Go To Cart </h4>

    </>

)

}


export default AllBooksList
