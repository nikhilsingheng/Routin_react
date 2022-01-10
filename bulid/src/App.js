
import './App.css';
// import Head from './Head';
import Home from './Home';
import About from './About';
import Dashbord from './Dashbord';
import { Route,Routes,  Link} from 'react-router-dom';
function App() {
  return (
    
    <div className="App">
     
     
  
     <nav>
       <ul>
         <li>
            <Link to="/">Home</Link>
         </li>
          <li>
            <Link to="/about">About</Link>
          </li>
           <li>
            <Link to="/Dashbord">Dashbord</Link>
          </li>
       </ul>
       </nav>    
     <Routes>
      <Route index element={<Home />} />
       <Route path="about" element={<About />} />
        <Route path="Dashbord" element={<Dashbord/>} />
   </Routes>
   
    
    </div>
    

  );
}

export default App;
