import React from 'react'

const LandingFeatures = () => {

return (

        <>
        
            {/* <!-- Featured products section --> */}
            <section className="featured-products">
                <h2>Featured Products</h2>
                <div className="product-list">
                    {/* <!-- Product 1 --> */}
                    <div className="product">
                        <img src={process.env.PUBLIC_URL + '/book1.png'} alt="Product 1"/>
                        <h3>The Way</h3>
                        <p className="price">$20</p>
                        <a href="/" className="btn">Add to Cart</a>
                    </div>
                    {/* <!-- Product 2 --> */}
                    <div className="product">
                        <img src={process.env.PUBLIC_URL + '/book2.png'} alt="Product 2"/>
                        <h3>Famous Last Words</h3>
                        <p className="price">$25</p>
                        <a href="/" className="btn">Add to Cart</a>
                    </div>
                    {/* <!-- Product 3 --> */}
                    <div className="product">
                        <img src={process.env.PUBLIC_URL + '/book3.jpg'} alt="Product 3"/>
                        <h3>Book MockUp</h3>
                        <p className="price">$30</p>
                        <a href="/" className="btn">Add to Cart</a>
                    </div>
                    {/* <!-- Product 3 --> */}
                    <div className="product">
                        <img src={process.env.PUBLIC_URL + '/book3.jpg'} alt="Product 3"/>
                        <h3>Book MockUp</h3>
                        <p className="price">$30</p>
                        <a href="/" className="btn">Add to Cart</a>
                    </div>
                    {/* <!-- Product 3 --> */}
                    <div className="product">
                        <img src={process.env.PUBLIC_URL + '/book3.jpg'} alt="Product 3"/>
                        <h3>Book MockUp</h3>
                        <p className="price">$30</p>
                        <a href="/" className="btn">Add to Cart</a>
                    </div>
                    {/* <!-- Product 3 --> */}
                    <div className="product">
                        <img src={process.env.PUBLIC_URL + '/book3.jpg'} alt="Product 3"/>
                        <h3>Book MockUp</h3>
                        <p className="price">$30</p>
                        <a href="/" className="btn">Add to Cart</a>
                    </div>
                    {/* <!-- Product 3 --> */}
                    <div className="product">
                        <img src={process.env.PUBLIC_URL + '/book3.jpg'} alt="Product 3"/>
                        <h3>Book MockUp</h3>
                        <p className="price">$30</p>
                        <a href="/" className="btn">Add to Cart</a>
                    </div>
                    {/* <!-- Product 3 --> */}
                    <div className="product">
                        <img src={process.env.PUBLIC_URL + '/book3.jpg'} alt="Product 3"/>
                        <h3>Book MockUp</h3>
                        <p className="price">$30</p>
                        <a href="/" className="btn">Add to Cart</a>
                    </div>
                    {/* <!-- Product 3 --> */}
                    <div className="product">
                        <img src={process.env.PUBLIC_URL + '/book3.jpg'} alt="Product 3"/>
                        <h3>Book MockUp</h3>
                        <p className="price">$30</p>
                        <a href="/" className="btn">Add to Cart</a>
                    </div>
                </div>
            </section>
        
        </>

)

}

export default LandingFeatures
