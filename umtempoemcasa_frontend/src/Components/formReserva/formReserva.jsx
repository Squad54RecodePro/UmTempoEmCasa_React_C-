import React, { Component } from 'react'
import './style.css'

class formReserva extends Component {
    state = {
        nome:'',
        nascimento:'',
        cpf:'',
        telefone:'',
        email:'',
        endereco:'',
        cep:'',
        senha:''
    }

     cadastrarRefugiado = (e) => {

        e.preventDefault()
        const refugiado = this.state
        console.log(refugiado)
        fetch('https://localhost:44351/api/Reservas', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(refugiado)

        }).then(() => {
            console.log("Novo Cliente Adicionado")
            window.alert("Cadastro realizado com Sucesso!")

        })
    }
    render() {
        return (
            <div className='container formBody'>
                <div className='textMenu'>
                    <h1>Faça sua reserva</h1>
                </div>
                <div className='container textForm'>
                    <div className='row'>
                        <div className='col-md-6 offset-md-3'>
                            <label className='form-label'>Nome do Refugiado :</label>
                            <input type="text" className="form-control" disabled="disabled"></input>
                            <br />
                            <label className='form-label'>Nome do Anúncio :</label>
                            <input type="text" className="form-control" disabled="disabled"></input>
                            <br/>
                            <label className='form-label'>Nome :</label>
                            <input type="text" className="form-control" placeholder='Insira seu nome *'></input>
                            <br/>
                            <label className='form-label'>Data início :</label>
                            <input type="date" className="form-control"></input>
                            <br/>
                            <label className='form-label'>Data final :</label>
                            <input type="date" className="form-control"></input>
            
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

export default formReserva