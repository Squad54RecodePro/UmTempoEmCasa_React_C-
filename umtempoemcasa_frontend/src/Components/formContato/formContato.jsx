import React, { Component } from 'react'
import './style.css'

class formContato extends Component {
    state = {
        nome:'',
        email:'',
        assunto:'',
        mensagem:''

    }
    cadastrarContato = (e) => {
    
        e.preventDefault()
        const contato = this.state
        console.log(contato)
        fetch("http://localhost:8080/cliente/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contato)

        }).then(() => {
            console.log("Mensagem enviada")
            window.alert("Contato realizado com Sucesso!")

        })
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
                            <input type="text" className="form-control" placeholder='Insira seu nome *' onChange={(e) => this.setState({ nome: e.target.value })}></input>
                            <br />
                            <label className='form-label'>Email :</label>
                            <input type="email" className="form-control" placeholder='Insira seu e-mail *' onChange={(e) => this.setState({ email: e.target.value })}></input>
                            <br />
                            <label className='form-label'>Assunto :</label>
                            <input type="text" className="form-control" onChange={(e) => this.setState({ assunto: e.target.value })}></input>
                            <br />
                            <label className='form-label'>Mensagem :</label>
                            <textarea type="text" className="form-control" style={{ height: '200px' }} onChange={(e) => this.setState({ mensagem: e.target.value })}></textarea>
                        </div>
                    </div>
                    <div className='alignButtons'>
                    <button className='btn btn-success btnEnviar' onClick={this.cadastrarContato}>Enviar</button>
                    <button className='btn btn-danger btnCancelar' href="/">Cancelar</button>
                    </div>

                </div>

            </div>


        )
    }
}

export default formContato