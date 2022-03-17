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
                <a className="navbar-brand" ><FontAwesomeIcon icon={faHouse}/>  UmTempoEmCasa</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between ">
                    <ul className="navbar-nav flex-grow-1 justify-content-center">
                        <li className="nav-item">
                            <Link to="/" className='navbar-logo'>
                            <a className="nav-link text-dark">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className='navbar-logo'>
                            <a className="nav-link text-dark">Contato</a>
                            </Link>
                        </li>
                        <li className="nav-item">  
                        </li>
                            <Link to="/" className='navbar-logo'>
                            <a className="nav-link text-dark">Refugiado</a>
                            </Link>                        
                        <li className="nav-item">
                            <Link to="/" className='navbar-logo'>
                            <a className="nav-link text-dark">Anfitrião</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className='navbar-logo'>
                            <a className="nav-link text-dark">ONGS</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className='navbar-logo'>
                            <a className="nav-link text-dark">Imóvel</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className='navbar-logo'>
                            <a className="nav-link text-dark">Anúncio</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className='navbar-logo'>
                            <a className="nav-link text-dark">Reserva</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default NavTeste