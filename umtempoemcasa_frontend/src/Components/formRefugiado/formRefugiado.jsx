import React, { Component } from 'react'
import './style.css'



class formRefugiado extends Component {

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
            fetch("https://localhost:44351/api/Refugiados", {
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
                    <h1>Cadastre-se</h1>
                </div>
                <div className='container textForm'>
                    <div className='row'>
                        <div className='col-md-6 offset-md-3'>
                            <label className='form-label'>Nome :</label>
                            <input type="text" className="form-control" placeholder='Insira seu nome *' onChange={(e) => this.setState({ nome: e.target.value })}></input>
                            <br />
                            <label className='form-label'>Nascimento :</label>
                            <input type="date" className="form-control"onChange={(e) => this.setState({ nascimento: e.target.value })}></input>
                            <br />
                            <label className='form-label'>CPF :</label>
                            <input type="text" className="form-control" placeholder='Insira seu CPF *' onChange={(e) => this.setState({ cpf: e.target.value })}></input>
                            <br/>                           
                            <a href='/#'>Caso não possua <i>CPF</i> clique neste link para adquirir seu <i>CPF</i>.</a>
                            <br/><br/>
                            <label className='form-label'>Email :</label>
                            <input type="email" className="form-control" placeholder='Insira seu e-mail *' onChange={(e) => this.setState({ email: e.target.value })}></input>
                            <br/>
                            <label className='form-label'>Endereço :</label>
                            <input type="text" className="form-control" placeholder='Insira seu endereço *' onChange={(e) => this.setState({ endereco: e.target.value })}></input>
                            <br/>
                            <label className='form-label'>CEP :</label>
                            <input type="text" className="form-control" placeholder='Insira seu CEP *' onChange={(e) => this.setState({ cep: e.target.value })}></input>
                            <br/>
                            <label className='form-label'>Senha :</label>
                            <input type="password" id='senha' className="form-control" onChange={(e) => this.setState({ senha: e.target.value })}></input>
                            <br/>
                            <label className='form-label' id='senhaC'>Confirme sua Senha :</label>
                            <input type="password" className="form-control"></input>
                        </div>
                    </div>
                    <div className='alignButtons'>
                    <button className='btn btn-success btnEnviar' onClick={this.cadastrarRefugiado}>Enviar</button>
                    <button className='btn btn-danger btnCancelar' href="/">Cancelar</button>
                    </div>
                </div>

            </div>


        )
    }
}

export default formRefugiado