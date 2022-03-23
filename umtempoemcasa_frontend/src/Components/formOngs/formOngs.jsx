import './style.css'
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';
import { NavLink } from 'reactstrap';

class formOngs extends React.Component {

    state = {
        id: 0,
        nome:'',
        cnpj:'',
        endereco:'',
        telefone:'',
        email:''
}
cadastrar = (e) => {

    e.preventDefault()
    const ong = this.state
    console.log(ong)
    fetch('https://localhost:44351/api/Ongs', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ong)

    }).then(() => {
        console.log("Nova Ong Adicionada")
        
window.alert("Cadastro realizado com Sucesso!")

    })
}

render() {

    return (

        <Container>
            <Paper elevation={3}  className="margintop">
                <h3>Cadastro de ong</h3>

                <form id='desingcadastro' className='form-control' noValidate autoComplete="off">

                    <div>
                        <TextField id="outlined-basic" label="Nome" variant="outlined" fullWidth
                            onChange={(e) => this.setState({ nome: e.target.value })}
                        />
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="CNPJ" variant="outlined" fullWidth
                            onChange={(e) => this.setState({ cnpj: e.target.value })}
                        />
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="Endereço" variant="outlined" fullWidth

                            onChange={(e) => this.setState({ endereco: e.target.value })}

                        />
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="Telefone" variant="outlined" fullWidth
                            onChange={(e) => this.setState({ telefone: e.target.value })}
                        />
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="E-mail" variant="outlined" fullWidth

                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                    </div>
                
                    <Button variant="contained" color="secondary" onClick={this.cadastrar} >
                        Cadastrar
                    </Button>
                </form>
                <NavLink href="/buscar-ong"><Button variant="contained" color="primary">
                    Consultar ong
                </Button>
                </NavLink>

            </Paper>
        </Container>
    )}
}

export default formOngs