import './style.css'
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';
import { NavLink } from 'reactstrap';

class formReserva extends React.Component {

    state = {
        id: 0,
        nome:'',
        nascimento:'',
        cpf:'',
        telefone:'',
        email:'',
        endereco:'',
        cep:'',
        senha:'' 
}
cadastrar = (e) => {

    e.preventDefault()
    const reserva = this.state
    console.log(reserva)
    fetch("https://localhost:44351/api/Reservas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reserva)

    }).then(() => {
        console.log("Nova Reserva Adicionada")
        
window.alert("Cadastro realizado com Sucesso!")

    })
}

render() {
    
    return (

        <Container>
            <Paper elevation={3}  className="margintop">
                <h3>Cadastro de reserva</h3>

                <form id='desingcadastro' className='form-control' noValidate autoComplete="off">

                    <div>
                        <TextField id="outlined-basic" label="Nome" variant="outlined" fullWidth
                            onChange={(e) => this.setState({ nome: e.target.value })}
                        />
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="Nascimento" variant="outlined" fullWidth
                            onChange={(e) => this.setState({ nascimento: e.target.value })}
                        />
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="CPF" variant="outlined" fullWidth
                            onChange={(e) => this.setState({ cpf: e.target.value })}
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
                    <div>
                        <TextField id="outlined-basic" label="Endereço" variant="outlined" fullWidth

                            onChange={(e) => this.setState({ endereco: e.target.value })}
                        />
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="CEP" variant="outlined" fullWidth

                            onChange={(e) => this.setState({ cep: e.target.value })}
                        />
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="Senha" variant="outlined" fullWidth

                            onChange={(e) => this.setState({ senha: e.target.value })}
                        />
                    </div>
                    <Button variant="contained" color="secondary" onClick={this.cadastrar} >
                        Cadastrar
                    </Button>
                </form>
                <NavLink href="/buscar-reserva"><Button variant="contained" color="primary">
                    Consultar reserva
                </Button>
                </NavLink>

            </Paper>
        </Container>
    )}
}

export default formReserva