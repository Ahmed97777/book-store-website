import React from 'react'

const Product = (props) => {

    return (

        <>
        
            {/* <!-- Product --> */}
            <div className="product">
                <img src={process.env.PUBLIC_URL + `${props.image}`} alt="Product"/>
                <h3>{props.title}</h3>
                <p className="price">{props.price}</p>
                <a href="/" className="btn">Add to Cart</a>
            </div>

        </>

    )

    }

export default Product
