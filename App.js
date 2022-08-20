import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from './Component/Navbar';
import HomePage from './Component/HomePage'
import AboutPage from './Component/AboutPage'
import ContactPage from './Component/ContactPage'
import ErrorPage from './Component/Errorpage'
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path= "/" element= {<HomePage/>}/>
       <Route path= "/contact" element= {<ContactPage/>}/>
       <Route path= "/about" element= {<AboutPage/>}/>
       <Route path= "*" element= {<ErrorPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
