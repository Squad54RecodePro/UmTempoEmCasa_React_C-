import React, { Component } from 'react'
import './style.css'

class formImovel extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div className='container formBody'>
                <div className='textMenu'>
                    <h1>Adicionar</h1>
                    <hr />
                    <h4>Imóvel</h4>
                </div>
                <div className='container textForm'>
                    <div className='row'>
                        <div className='col-md-6 offset-md-3'>
                            <label className='form-label'>Endereço :</label>
                            <input type="text" className="form-control" placeholder='Insira o endereço *'></input>
                            <br />
                            <label className='form-label'>Cidade :</label>
                            <input type="text" className="form-control" placeholder='Insira sua cidade *'></input>
                            <br />
                            <label className='form-label'>Cep :</label>
                            <input type="text" className="form-control" placeholder='Insira o CEP *'></input>
                        </div>
                    </div>
                    <button className='btn btn-success btnEnviar'>Enviar</button>
                    <button className='btn btn-danger btnCancelar' href="/">Cancelar</button>
                    
                </div>

            </div>


        )
    }
}

export default formImovel