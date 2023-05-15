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
                <div>
                    <AllBooksList/>
                </div>
        </section>
    
    </>

)

}

export default AllBooks
