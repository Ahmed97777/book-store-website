import React from 'react';
import FeaturesList from './FeaturesList';

const LandFeaturesOrg = () => {

    const productData = [{title:"The Way", image:"/book1.png", price:"$75"},
    {title:"Book MockUp", image:"/book3.jpg", price:"$50"},
    {title:"How To Get Any Job", image:"/book5.jpg", price:"$100"},
    {title:"Who Gets Promoted", image:"/book6.jpg", price:"$120"},
    {title:"Secrets of Winning", image:"/book7.jpg", price:"$90"},
    {title:"The Ultimate Interview", image:"/book8.jpg", price:"$150"},
    {title:"Jobs to be Done", image:"/book9.png", price:"$85"},
    {title:"The Leader", image:"/book10.jpg", price:"$55"}
]


    return (

            <>

                {
                    productData.map((item, i)=> {
                        return (
                            <FeaturesList  key={i} item={item} />
                        )
                    })
                }
            
            </>

    )

}

export default LandFeaturesOrg
