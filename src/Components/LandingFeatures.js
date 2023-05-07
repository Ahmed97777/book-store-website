import React from 'react'
import LandFeaturesOrg from './LandFeaturesOrg'
import { Link } from 'react-router-dom'

const LandingFeatures = () => {

return (

        <>
        
            {/* <!-- Featured products section --> */}
            <section className="featured-products">
                <h2>Featured Products</h2>
                <Link to="/all-books" ><p className='all-books-text'>All Books</p></Link>
                <div className="product-list">
                    <LandFeaturesOrg/>
                </div>
            </section>
        
        </>

)

}

export default LandingFeatures
