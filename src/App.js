import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBook , faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {

  library.add(faBook);

  return (

    <div className="App">

      <h1>Welcome to our website</h1>

      <div className="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>

      <FontAwesomeIcon icon="book" />

      <FontAwesomeIcon icon={faCartShopping} />

      <FontAwesomeIcon icon={faUser} />

    </div>
  );
}

export default App;
