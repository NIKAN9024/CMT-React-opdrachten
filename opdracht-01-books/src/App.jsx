import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Navigation from './pages/Navigation';


function App() {

  return (
    <>
  <BrowserRouter>
  <Routes>
    
    <Route path="/" element={<Navigation/>}>







     <Route index element={<Home />} />
    <Route path="/about" element={<About/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="*" element={<NoPage/>} />
    </Route>


  </Routes>
  
  </BrowserRouter>
    
    </>
  );
}

export default App;
