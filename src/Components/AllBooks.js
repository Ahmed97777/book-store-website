import React, { useEffect } from 'react';
import AllBooksList from './AllBooksList'

const AllBooks = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        }, []);

return (

    <>

        {/* <!-- Featured products section --> */}
        <section className="featured-products all-books-style">
                <h2>All Books</h2>
                <div className="headerSearch">
                    <input type="text" placeholder="Search..."/>
                    <button type="submit">Search</button>
                </div>
                <div className="product-list">
                    <AllBooksList/>
                </div>
        </section>
    
    
    
    
    </>

)

}


export default AllBooks
