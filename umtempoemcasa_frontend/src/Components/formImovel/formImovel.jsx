import './style.css'
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';
import { NavLink } from 'reactstrap';

class formImovel extends React.Component {
    state = {
        id: 0,
        anfitriaoForeignKey: 0,
        endereco: '',
        cidade: '',
        cep: ''
    }
    cadastrar = (e) => {

        e.preventDefault()
        const imovel = this.state
        console.log(imovel)
        fetch("https://localhost:44351/api/Imoveis", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(imovel)

        }).then(() => {
            console.log("Novo Imóvel Adicionado")

            window.alert("Cadastro realizado com Sucesso!")
        })
    }

    render() {

        return (

            <Container>
                <Paper elevation={3} className="margintop">
                    <h3>Cadastro de imóvel</h3>

                    <form id='desingcadastro' className='form-control' noValidate autoComplete="off">

                        <div>
                            <TextField id="outlined-basic" label="Código Anfitrião" variant="outlined" fullWidth
                                onChange={(e) => this.setState({ anfitriaoForeignKey: e.target.value })}
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

                        <Button variant="contained" color="secondary" onClick={this.cadastrar} >
                            Cadastrar
                        </Button>
                    </form>
                    <NavLink href="/buscar-imovel"><Button variant="contained" color="primary">
                        Consultar imóvel
                    </Button>
                    </NavLink>

                </Paper>
            </Container>
        )
    }
}

export default formImovel