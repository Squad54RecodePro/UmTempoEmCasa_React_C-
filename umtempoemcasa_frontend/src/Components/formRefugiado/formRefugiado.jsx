import './style.css'
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';
import { NavLink } from 'reactstrap';



class formRefugiado extends React.Component {

    state = {
        id: 0,
        nome: '',
        nascimento: '',
        cpf: '',
        telefone: '',
        email: '',
        endereco: '',
        cep: '',
        senha: ''  
}
cadastrar = (e) => {

    e.preventDefault()
    const refugiado = this.state
    console.log(refugiado)
    fetch("https://localhost:44351/salvar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(refugiado)

    }).then(() => {
        console.log("Novo refugiado Adicionado")
        
window.alert("Cadastro realizado com Sucesso!")

    })


}


render() {
    

    return (

        <Container>
            <Paper elevation={3}  className="margintop">
                <h3>Cadastro de refugiado</h3>

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
                        <TextField id="outlined-basic" label="Telefoner" variant="outlined" fullWidth
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
                <NavLink href="/buscar-refugiado"><Button variant="contained" color="primary">
                    Consultar refugiado
                </Button>
                </NavLink>

            </Paper>
        </Container>
    )}
}

export default formRefugiado