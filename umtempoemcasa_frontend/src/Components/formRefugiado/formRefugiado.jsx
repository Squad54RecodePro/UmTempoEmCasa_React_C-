import React, { Component } from 'react'
import './style.css'


class formRefugiado extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div className='container formBody'>
                <div className='textMenu'>
                    <h1>Cadastre-se</h1>
                </div>
                <div className='container textForm'>
                    <div className='row'>
                        <div className='col-md-6 offset-md-3'>
                            <label className='form-label'>Nome :</label>
                            <input type="text" className="form-control" placeholder='Insira seu nome *'></input>
                            <br />
                            <label className='form-label'>Nascimento :</label>
                            <input type="date" className="form-control"></input>
                            <br />
                            <label className='form-label'>CPF :</label>
                            <input type="text" className="form-control" placeholder='Insira seu CPF *'></input>
                            <br/>
                            
                            <a href='#'>Caso não possua <i>CPF</i> clique neste link para adquirir seu <i>CPF</i>.</a>

                            <br/><br/>

                            <label className='form-label'>Email :</label>
                            <input type="email" className="form-control" placeholder='Insira seu e-mail *'></input>
                            <br/>
                            <label className='form-label'>Endereço :</label>
                            <input type="text" className="form-control" placeholder='Insira seu endereço *'></input>
                            <br/>
                            <label className='form-label'>CEP :</label>
                            <input type="text" className="form-control" placeholder='Insira seu CEP *'></input>
                            <br/>
                            <label className='form-label'>Senha :</label>
                            <input type="password" className="form-control"></input>
                            <br/>
                            <label className='form-label'>Confirme sua Senha :</label>
                            <input type="password" className="form-control"></input>
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

export default formRefugiado