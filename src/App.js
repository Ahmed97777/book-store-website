import './App.css';
import { useState, createContext } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HeaderNavbar from "./Components/HeaderNavbar";
import NotFound from "./Components/NotFound"
import LandingMain from './Components/LandingMain';
import Footer from './Components/Footer';
import AllBooks from './Components/AllBooks';
import BookDetails from './Components/BookDetails';
import RequestBook from './Components/RequestBook';
import CartPage from './Components/CartPage';
import LandingFeatures from './Components/LandingFeatures';
import LoginPage from './Components/LoginPage';
import SignUpPage from './Components/SignUpPage';


function App() {


  return (

 
    
    <div className="App">

<>

  <HeaderNavbar />

 

  <BrowserRouter>
    <Routes>

      <Route  path="/" element= {<div><LandingMain/><LandingFeatures/></div>} />

      <Route  path="/login-page" element= {<div><LoginPage /></div>} />

      <Route  path="/signUp-page" element= {<div><SignUpPage /></div>} />

      <Route  path="/all-books" element= {<div><AllBooks/></div>} />

      <Route  path="/book-details" element= {<div><BookDetails/></div>} />

      <Route  path="/request-book" element= {<div><RequestBook/></div>} />

      <Route  path="/cart-page" element= {<div><CartPage/></div>} />

      <Route  path="*" element= {<div><NotFound/></div>} />

    </Routes>
  </BrowserRouter>


  <Footer/>
  

</>


</div>

 
  

    
  );
}

export default App;

