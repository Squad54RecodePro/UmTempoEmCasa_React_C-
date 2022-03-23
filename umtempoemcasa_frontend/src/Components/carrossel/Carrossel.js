import React from 'react'
import './Carrossel.css';


function Carrossel() {
  return (
    
    
    <div className="Container" id="testemunhas">
      <h4>Conheça alguns depoimentos</h4>
      <div className="row">
        <div className="col-md-12">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">   
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-4">
                    <div className="single-box">
                      <div className="img-area"><img src="~/inter.png" alt="" /></div>
                      <div className="img-text">
                        <h2>Maria Silva /SP</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quibusdam, deleniti ipsam enim atque beatae molestias officia possimus perferendis consequuntur sunt doloribus quae eveniet veritatis maiores quisquam aliquam placeat. Doloremque!</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="single-box">
                      <div className="img-area"><img src="~/inter.png" alt="" /></div>
                      <div className="img-text">
                        <h2>Pessoa Dois</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quibusdam, deleniti ipsam enim atque beatae molestias officia possimus perferendis consequuntur sunt doloribus quae eveniet veritatis maiores quisquam aliquam placeat. Doloremque!</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="single-box">
                      <div className="img-area"><img src="~/inter.png" alt="" /></div>
                      <div className="img-text">
                        <h2>Pessoa Tres</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quibusdam, deleniti ipsam enim atque beatae molestias officia possimus perferendis consequuntur sunt doloribus quae eveniet veritatis maiores quisquam aliquam placeat. Doloremque!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-4">
                    <div className="single-box">
                      <div className="img-area"><img src="~/inter.png" alt="" /></div>
                      <div className="img-text">
                        <h2>Pessoa Quatro</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quibusdam, deleniti ipsam enim atque beatae molestias officia possimus perferendis consequuntur sunt doloribus quae eveniet veritatis maiores quisquam aliquam placeat. Doloremque!</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="single-box">
                      <div className="img-area"><img src="~/inter.png" alt="" /></div>
                      <div className="img-text">
                        <h2>Pessoa Cinco</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quibusdam, deleniti ipsam enim atque beatae molestias officia possimus perferendis consequuntur sunt doloribus quae eveniet veritatis maiores quisquam aliquam placeat. Doloremque!</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="single-box">
                      <div className="img-area"><img src="~/inter.png" alt="" /></div>
                      <div className="img-text">
                        <h2>Pessoa Seis</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quibusdam, deleniti ipsam enim atque beatae molestias officia possimus perferendis consequuntur sunt doloribus quae eveniet veritatis maiores quisquam aliquam placeat. Doloremque!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="controle-carrossel">

              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Carrossel;