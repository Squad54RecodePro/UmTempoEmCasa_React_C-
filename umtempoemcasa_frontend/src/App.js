import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import Home from './Components/Pages/Home';
import Reserva from './Components/Pages/Reserva';
import Anfitriao from './Components/Pages/Anfitriao';
import Anuncio from './Components/Pages/Anuncio';
import Contato from './Components/Pages/Contato';
import Imovel from './Components/Pages/Imovel';
import Refugiado from './Components/Pages/Refugiado';
import Ongs from './Components/Pages/Ongs';
import Footer from './Components/footer/Footer';
import RefugiadoService from './Components/Service/RefugiadoService';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/anuncio' element={<Anuncio />} />
        <Route path='/imovel' element={<Imovel />} />
        <Route path='/reserva' element={<Reserva />} />
        <Route path='/anfitriao' element={<Anfitriao />} />
        <Route path='/refugiado' element={<Refugiado />} />
        <Route path='/ongs' element={<Ongs />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/buscar-refugiado' element={<RefugiadoService />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
