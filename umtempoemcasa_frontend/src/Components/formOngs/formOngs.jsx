import React, { Component } from 'react'
import './style.css'

class formOngs extends Component {
    state = {
        nome:'',
        cnpj:'',
        endereco:'',
        telefone:'',
        email:'',
    }

     cadastrarOngs = (e) => {

        e.preventDefault()
        const ongs = this.state
        console.log(ongs)
        fetch("http://localhost:8080/cliente/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(ongs)

        }).then(() => {
            console.log("Nova Ong Adicionada")
            window.alert("Cadastro realizado com Sucesso!")

        })
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
                            <input type="text" className="form-control" placeholder='Insira seu nome *' onChange={(e) => this.setState({nome: e.target.value})}></input>
                            <br />
                            <label className='form-label'>CNPJ :</label>
                            <input type="text" className="form-control" placeholder='Insira seu CNPJ *' onChange={(e) => this.setState({cnpj: e.target.value})}></input>
                            <br/>
                            <label className='form-label'>Endereço :</label>
                            <input type="text" className="form-control" placeholder='Insira seu endereço *' onChange={(e) => this.setState({endereco: e.target.value})}></input>
                            <br/>
                            <label className='form-label'>Telefone :</label>
                            <input type="text" className="form-control" placeholder='Insira seu CEP *' onChange={(e) => this.setState({telefone: e.target.value})}></input>
                            <br/>
                            <label className='form-label'>Email :</label>
                            <input type="email" className="form-control" placeholder='Insira seu e-mail *' onChange={(e) => this.setState({email: e.target.value})}></input>
            
                           </div>
                    </div>
                    <div className='alignButtons'>
                    <button className='btn btn-success btnCadastrar' onClick={this.cadastrarOngs}>Cadastrar</button>
                    <button className='btn btn-danger btnCancelar' href="/">Cancelar</button>
                    </div>
                    
                </div>

            </div>


        )
    }
}

export default formOngs