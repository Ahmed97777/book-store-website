import React, { useState } from 'react';
import Product from './Product';


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
        {title:"Temple", image:"/book13.jpg", price:"$99"},
        {title:"The Way", image:"/book1.png", price:"$75"},
        {title:"Famous Last Words", image:"/book2.png", price:"$80"},
        {title:"Book MockUp", image:"/book3.jpg", price:"$50"},
        {title:"Little Rabbit", image:"/book4.png", price:"$35"},
        {title:"How To Get Any Job", image:"/book5.jpg", price:"$100"},
        {title:"Who Gets Promoted", image:"/book6.jpg", price:"$120"},
        {title:"Secrets of Winning", image:"/book7.jpg", price:"$90"},
    ]

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

return (

    <>


        <div className='search-box'>
                <input type="text" onChange={handleInputChange} />
                <button onClick={handleSearch}>Search</button>
        </div>

        {filteredBooks.map((book, i) => (
                <Product key={i} title={book.title} image={book.image} price={book.price} />
        ))}





        {/* {
            allBooksList.map((e, i)=> {
                return (
                    <Product key={i} title={e.title} image={e.image} price={e.price}/>
                )
            })
        } */}
    
    
    
    
    </>

)

}


export default AllBooksList
