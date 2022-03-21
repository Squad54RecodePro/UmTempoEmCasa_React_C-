import React, { Component } from 'react'
import './style.css'

class formOngs extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div className='container formBody'>
                <div className='textMenu'>
                    <h1>Cadastre sua ONG</h1>
                </div>
                <div className='container textForm'>
                    <div className='row'>
                        <div className='col-md-6 offset-md-3'>
                            <label className='form-label'>Nome :</label>
                            <input type="text" className="form-control" placeholder='Insira seu nome *'></input>
                            <br />
                            <label className='form-label'>CNPJ :</label>
                            <input type="text" className="form-control" placeholder='Insira seu CNPJ *'></input>
                            <br/>
                            <label className='form-label'>Endereço :</label>
                            <input type="text" className="form-control" placeholder='Insira seu endereço *'></input>
                            <br/>
                            <label className='form-label'>Telefone :</label>
                            <input type="text" className="form-control" placeholder='Insira seu CEP *'></input>
                            <br/>
                            <label className='form-label'>Email :</label>
                            <input type="email" className="form-control" placeholder='Insira seu e-mail *'></input>
            
                           </div>
                    </div>
                    <div className='alignButtons'>
                    <button className='btn btn-success btnCadastrar'>Cadastrar</button>
                    <button className='btn btn-danger btnCancelar' href="/">Cancelar</button>
                    </div>
                    
                </div>

            </div>


        )
    }
}

export default formOngs