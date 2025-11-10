import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import AnimalDetail from "./pages/AnimalDetail";



import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animal/:id" element={<AnimalDetail />} />

       
      
        
      </Routes>
    </BrowserRouter>
  );
}
