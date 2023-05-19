import {React,useState,useEffect} from 'react';
import FeaturesList from './FeaturesList';

const LandFeaturesOrg = () => {
    const productData = [
    {bookName:"The Way", image:"/book1.png", price:"$75","stockNumber" : 10},
    {bookName:"Book MockUp", image:"/book3.jpg", price:"$50","stockNumber" : 10},
    {bookName:"How To Get Any Job", image:"/book5.jpg", price:"$100","stockNumber" : 10},
    {bookName:"Who Gets Promoted", image:"/book6.jpg", price:"$120","stockNumber" : 10},
    {bookName:"Secrets of Winning", image:"/book7.jpg", price:"$90","stockNumber" : 10},
    {bookName:"The Ultimate Interview", image:"/book8.jpg", price:"$150","stockNumber" : 10},
    {bookName:"Jobs to be Done", image:"/book9.png", price:"$85","stockNumber" : 10},
    {bookName:"The Leader", image:"/book10.jpg", price:"$55","stockNumber" : 10}
]
    const[books,setBooks] = useState([]);


const fetchData = () => {
  
    return fetch("http://localhost:8081/api/v1/book/books")
          .then((response) => response.json())
          .then((data) => setBooks(data))
          .then(() => console.log(books));
  }

  useEffect(() => {
    fetchData();
  },[])

    return (

            <>

                {
                    books.map((item, i)=> {
                        return (
                            <FeaturesList  key={i} item={item} />
                        )
                    })
                }
            
            </>

    )

}

export default LandFeaturesOrg
