import React from 'react'
import axios from 'axios'
import { Container, Paper, Button } from '@material-ui/core';

class ReservaService extends React.Component {
    state = {
        reservas: []
    }

    componentDidMount() {
        axios.get("https://localhost:44351/api/Reservas")
            .then(res => {
                const dadosreservas = res.data
                this.setState({ reservas: dadosreservas })
            })
    }
    componentDidUpdate() {
        this.componentDidMount();
    }

    deleteReserva(id) {
        if (window.confirm('Deseja excluir a Reserva?')) {
            fetch('https://localhost:44351/api/Reservas/' + id, {
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
                <h1>Reservas</h1>

                <Paper elevation={3} style={paperStyle}>

                    {this.state.reservas.map(reserva => (
                        <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={reserva.id}>
                            Nome:{reserva.nome}<br />
                            E-mail:{reserva.email}<br />
                            Idade:{reserva.idade}<br />
                            Nascimento:{reserva.nascimento}<br />
                            Endereço:{reserva.endereco}<br />
                            CEP:{reserva.cep}<br />
                            Telefone:{reserva.telefone}<br />
                            Senha:{reserva.senha}<br />
                            <Button id="buttoncrud" variant="contained" color="primary" >Detalhes</Button>
                            <Button id="buttoncrud" variant="contained" color="secondary">Alterar</Button>
                            <Button id="buttoncrud" variant="contained" color="danger" onClick={() => this.deleteReserva(reserva.id)} >Excluir</Button>

                        </Paper>
                    ))
                    }


                </Paper>
            </Container>
        )
    }
}

export default ReservaService