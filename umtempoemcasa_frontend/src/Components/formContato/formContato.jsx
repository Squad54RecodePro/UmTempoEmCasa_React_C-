import './style.css'
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';
import { NavLink } from 'reactstrap';

class formContato extends React.Component {
    state = {
        id: 0,
        nome: '',
        email: '',
        assunto: '',
        mensagem: ''
    }
    cadastrar = (e) => {

        e.preventDefault()
        const contato = this.state
        console.log(contato)
        fetch("https://localhost:44351/api/Contatos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contato)

        }).then(() => {
            console.log("Novo Contato Adicionado")

            window.alert("Contato realizado com Sucesso!")

        })


    }


    render() {


        return (

            <Container>
                <Paper elevation={3} className="margintop">
                    <h3>Cadastro de contato</h3>

                    <form id='desingcadastro' className='form-control' noValidate autoComplete="off">

                        <div>
                            <TextField id="outlined-basic" label="Nome" variant="outlined" fullWidth
                                onChange={(e) => this.setState({ nome: e.target.value })}
                            />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="E-mail" variant="outlined" fullWidth

                                onChange={(e) => this.setState({ email: e.target.value })}
                            />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Assunto" variant="outlined" fullWidth
                                onChange={(e) => this.setState({ assunto: e.target.value })}
                            />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Mensagem" variant="outlined" fullWidth
                                onChange={(e) => this.setState({ mensagem: e.target.value })}
                            />
                        </div>
                        
                        <Button variant="contained" color="secondary" onClick={this.cadastrar} >
                            Cadastrar
                        </Button>
                    </form>
                    <NavLink href="/buscar-contato"><Button variant="contained" color="primary">
                        Consultar contato
                    </Button>
                    </NavLink>

                </Paper>
            </Container>
        )
    }

}
export default formContato