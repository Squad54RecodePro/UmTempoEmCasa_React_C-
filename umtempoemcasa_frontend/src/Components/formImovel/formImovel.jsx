import React, { Component } from 'react'
import './style.css'

class formImovel extends Component {
    state = {
        endereco:'',
        cidade:'',
        cep:''
    }
    cadastrarImovel = (e) => {
    
        e.preventDefault()
        const imovel = this.state
        console.log(imovel)
        fetch("http://localhost:8080/cliente/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(imovel)

        }).then(() => {
            console.log("Mensagem enviada")
            window.alert("Imovel adicionado com sucesso!")

        })
    }
    render() {
        return (
            <div className='container formBody'>
                <div className='textMenu'>
                    <h1>Cadastre seu imóvel</h1>
                </div>
                <div className='container textForm'>
                    <div className='row'>
                        <div className='col-md-6 offset-md-3'>
                            <label className='form-label'>Endereço :</label>
                            <input type="text" className="form-control" placeholder='Insira o endereço *' onChange={(e) => this.setState({endereco: e.target.value })}></input>
                            <br />
                            <label className='form-label'>Cidade :</label>
                            <input type="text" className="form-control" placeholder='Insira sua cidade *' onChange={(e) => this.setState({cidade: e.target.value })}></input>
                            <br />
                            <label className='form-label'>CEP :</label>
                            <input type="text" className="form-control" placeholder='Insira o CEP *' onChange={(e) => this.setState({cep: e.target.value})}></input>
                        </div>
                    </div>
                    <div className='alignButtons'>
                    <button className='btn btn-success btnEnviar' onClick={this.cadastrarImovel}>Enviar</button>
                    <button className='btn btn-danger btnCancelar' href="/">Cancelar</button>
                    </div>
                    
                </div>

            </div>


        )
    }
}

export default formImovel