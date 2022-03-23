import React from 'react'
import axios from 'axios'
import { Container, Paper, Button } from '@material-ui/core';

class AnfitriaoService extends React.Component {
    state = {
        anfitrioes: []
    }

    componentDidMount() {
        axios.get('https://localhost:44351/api/Anfitrioes')
            .then(res => {
                const dadosanfitrioes = res.data
                this.setState({ anfitrioes: dadosanfitrioes })
            })
    }
    componentDidUpdate() {
        this.componentDidMount();
    }

    deleteAnfitriao(id) {
        if (window.confirm('Deseja excluir o Cadastro?')) {
            fetch('https://localhost:44351/api/Anfitrioes/' + id, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {

        const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
        return (
            <Container>
                <h1>Anfitriões</h1>

                <Paper elevation={3} style={paperStyle}>

                    {this.state.anfitrioes.map(anfitriao => (
                        <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={anfitriao.id}>
                            Nome:{anfitriao.nome}<br />
                            Tipo:{anfitriao.tipo}<br />
                            Nascimento:{anfitriao.nascimento}<br />
                            Telefone:{anfitriao.telefone}<br />
                            Email:{anfitriao.email}<br />
                            Endereço:{anfitriao.endereco}<br />
                            Cidade:{anfitriao.cidade}<br />
                            CEP:{anfitriao.cep}<br />
                            CPF:{anfitriao.cpf}<br />
                            CNPJ:{anfitriao.cnpj}<br />
                            Senha:{anfitriao.senha}<br />
                            <Button id="buttoncrud" variant="contained" color="primary" >Detalhes</Button>
                            <Button id="buttoncrud" variant="contained" color="secondary">Alterar</Button>
                            <Button id="buttoncrud" variant="contained" color="danger" onClick={() => this.deleteAnfitriao(anfitriao.id)} >Excluir</Button>

                        </Paper>
                    ))
                    }


                </Paper>
            </Container>
        )
    }
}

export default AnfitriaoService