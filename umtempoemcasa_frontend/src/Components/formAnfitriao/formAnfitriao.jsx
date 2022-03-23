import './style.css'
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';
import { NavLink } from 'reactstrap';

class formAnfitriao extends React.Component {

    state = {
        id: 0,
        nome: '',
        tipo: '',
        nascimento: '',
        telefone: '',
        email: '',
        endereco: '',
        cidade: '',
        cep: '',
        cpf: '',
        cnpj: '',
        senha: ''
    }
    cadastrar = (e) => {

        e.preventDefault()
        const anfitriao = this.state
        console.log(anfitriao)
        fetch("https://localhost:44351/api/Anfitrioes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(anfitriao)

        }).then(() => {
            console.log("Novo Anfitrião Adicionado")

            window.alert("Cadastro realizado com Sucesso!")

        })
    }

    render() {

        return (

            <Container>
                <Paper elevation={3} className="margintop">
                    <h3>Cadastro de anfitriao</h3>

                    <form id='desingcadastro' className='form-control' noValidate autoComplete="off">

                        <div>
                            <TextField id="outlined-basic" label="Nome" variant="outlined" fullWidth
                                onChange={(e) => this.setState({ nome: e.target.value })}
                            />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Tipo" variant="outlined" fullWidth
                                onChange={(e) => this.setState({ tipo: e.target.value })}
                            />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Nascimento" variant="outlined" fullWidth
                                onChange={(e) => this.setState({ nascimento: e.target.value })}
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
                            <TextField id="outlined-basic" label="Cidade" variant="outlined" fullWidth
                                onChange={(e) => this.setState({ cidade: e.target.value })}
                            />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="CEP" variant="outlined" fullWidth

                                onChange={(e) => this.setState({ cep: e.target.value })}

                            />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="CPF" variant="outlined" fullWidth

                                onChange={(e) => this.setState({ cpf: e.target.value })}

                            />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="CNPJ" variant="outlined" fullWidth

                                onChange={(e) => this.setState({ cnpj: e.target.value })}

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
                    <NavLink href="/buscar-anfitriao"><Button variant="contained" color="primary">
                        Consultar Anfitrião
                    </Button>
                    </NavLink>

                </Paper>
            </Container>
        )
    }
}

export default formAnfitriao