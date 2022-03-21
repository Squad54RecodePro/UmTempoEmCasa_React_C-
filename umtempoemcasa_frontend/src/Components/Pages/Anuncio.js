import React from 'react'
import Card from '../cards/Card';

function Anuncio() {
  return (
    <>
    <img src='/img/banner2.png' alt='...' className='img-fluid' />
    <div className="container text-center p-4">
        <a href='./Reserva'><button type="button" className="btn btn-outline-dark">Criar Anúncio</button></a> 
        </div>
    <Card />
    </>
  )
}

export default Anuncio;