import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import Reserva from './Components/Pages/Reserva';
import Anfitriao from './Components/Pages/Anfitriao';
import Anuncio from './Components/Pages/Anuncio';
import Contato from './Components/Pages/Contato';
import Imovel from './Components/Pages/Imovel';
import Refugiado from './Components/Pages/Refugiado';
import Ongs from './Components/Pages/Ongs';


function App() {
  return (
    <div>
      <Router>
        <Navbar />     
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Anuncio' element={<Anuncio />} />
        <Route path='/Imovel' element={<Imovel />} />
        <Route path='/Reserva' element={<Reserva />} />
        <Route path='/Anfitriao' element={<Anfitriao />} />
        <Route path='/Refugiado' element={<Refugiado />} />
        <Route path='/Ongs' element={<Ongs />} />
        <Route path='/Contato' element={<Contato />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
