import React, { useEffect } from 'react';
import AllBooksList from './AllBooksList'
import { Link } from 'react-router-dom';

const AllBooks = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        }, []);

return (

    <>

        {/* <!-- Featured products section --> */}
        <section className="featured-products all-books-style">
                <h2>All Books</h2>
                <Link to="/request-book" ><h4 className='request-book' >Request A Book</h4></Link>
                
                {/* <div className="headerSearch">
                    <input type="text" placeholder="Search..."/>
                    <button type="submit">Search</button>
                </div> */}
                <div className="product-list">
                    <AllBooksList/>
                </div>
        </section>
    
    
    
    
    </>

)

}


export default AllBooks
