import './App.css';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faBook , faCartShopping, faUser, faAddressBook} from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import HeaderNavbar from "./Components/HeaderNavbar";
import NotFound from "./Components/NotFound"

function App() {

  // library.add(faBook);

  return (

    <div className="App">

      


      <>
      
        <BrowserRouter>
          <Routes>

            <Route  path="/" element= {<div><HeaderNavbar/></div>} />

            <Route  path="*" element= {<div><HeaderNavbar/><NotFound/></div>} />

          </Routes>
        </BrowserRouter>
      
      
      </>


      {/* <h1>Welcome to our website</h1>

      <div className="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>

      <FontAwesomeIcon icon="book" />

      <FontAwesomeIcon icon={faCartShopping} />

      <FontAwesomeIcon icon={faUser} />

      <FontAwesomeIcon icon={faAddressBook} /> */}

    </div>
  );
}

export default App;
