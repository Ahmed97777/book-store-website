import React from 'react';
import Product from './Product';

const LandFeaturesOrg = () => {



    const productData = [{title:"The Way", image:"/book1.png", price:"$75"},
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



    return (

            <>

            
                {
                    productData.map((e, i)=> {
                        return (
                            <Product key={i} title={e.title} image={e.image} price={e.price}/>
                        )
                    })
                }
                
            
            </>

    )

}

export default LandFeaturesOrg
