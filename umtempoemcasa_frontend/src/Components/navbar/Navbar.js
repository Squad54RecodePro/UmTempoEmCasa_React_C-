import React from 'react'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function NavTeste() {
  return (
    <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light">
            <div className="container-fluid">
                <Link to="./" className='navbar-logo'>
                <a className="navbar-brand" href='/'><FontAwesomeIcon icon={faHouse}/>  UmTempoEmCasa</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between ">
                    <ul className="navbar-nav flex-grow-1 justify-content-center">
                        <li className="nav-item">
                            <Link to="./" className='navbar-logo'>
                            <a className="nav-link text-dark" href='/'>Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="Contato" className='navbar-logo'>
                            <a className="nav-link text-dark" href='./Contato'>Contato</a>
                            </Link>
                        </li>
                        
                        <li className="nav-item">  
                            <Link to="Refugiado" className='navbar-logo'>
                            <a className="nav-link text-dark" href='./Refugiado'>Refugiado</a>
                            </Link>  
                        </li>     
                        <li className="nav-item">  
                            <Link to="Anfitriao" className='navbar-logo'>
                            <a className="nav-link text-dark" href='./Anfitriao'>Anfitrião</a>
                            </Link>  
                        </li>                   
                        <li className="nav-item">
                            <Link to="Ongs" className='navbar-logo'>
                            <a className="nav-link text-dark" href='./Ongs'>ONGS</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Imovel" className='navbar-logo'>
                            <a className="nav-link text-dark" href='./Imovel'>Imóvel</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Anuncio" className='navbar-logo'>
                            <a className="nav-link text-dark" href='./Anuncio'>Anúncio</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Reserva" className='navbar-logo'>
                            <a className="nav-link text-dark" href='./Reserva'>Reserva</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default NavTeste