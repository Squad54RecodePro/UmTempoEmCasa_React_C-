import React, { Component } from 'react'
import './style.css'

class formContato extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div className='container formBody'>
                <div className='textMenu'>
                    <h1>Entre em contato concosco</h1>
                </div>
                <div className='container textForm'>
                    <div className='row'>
                        <div className='col-md-6 offset-md-3'>
                            <label className='form-label'>Nome :</label>
                            <input type="text" className="form-control" placeholder='Insira seu nome *'></input>
                            <br />
                            <label className='form-label'>Email :</label>
                            <input type="email" className="form-control" placeholder='Insira seu e-mail *'></input>
                            <br />
                            <label className='form-label'>Assunto :</label>
                            <input type="text" className="form-control"></input>
                            <br />
                            <label className='form-label'>Mensagem :</label>
                            <textarea type="text" className="form-control" style={{ height: '200px' }}></textarea>
                        </div>
                    </div>
                    <div className='alignButtons'>
                    <button className='btn btn-success btnEnviar'>Enviar</button>
                    <button className='btn btn-danger btnCancelar' href="/">Cancelar</button>
                    </div>

                </div>

            </div>


        )
    }
}

export default formContato