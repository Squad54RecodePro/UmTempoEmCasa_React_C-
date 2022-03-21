import React from 'react'
import HeroSection from '../HeroSection'
import Carrossel from '../carrossel/Carrossel';
import Membros from '../membros/Membros';

function Home() {
  return (
    <div className="row">
    <HeroSection />
    <Carrossel />
    <Membros />
    </div>

  )
}

export default Home;