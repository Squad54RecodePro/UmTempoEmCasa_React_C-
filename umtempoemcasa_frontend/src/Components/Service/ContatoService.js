import React from 'react'

class ContatoService extends React.Component() {
    state = {
        contatos: []
    }

    componentDidMount() {
        axios.get('https://localhost:44351/api/Contatos')
            .then(res => {
                const dadoscontatos = res.data
                this.setState({ contatos: dadoscontatos })
            })
    }
    componentDidUpdate() {
        this.componentDidMount();
    }

    deleteContato(id) {
        if (window.confirm('Deseja excluir o Contato?')) {
            fetch('https://localhost:44351/api/Contatos/' + id, {
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
                <h1>Contatos</h1>

                <Paper elevation={3} style={paperStyle}>

                    {this.state.contatos.map(contato => (
                        <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={contato.id}>
                            Nome:{contato.nome}<br />
                            Email:{contato.email}<br />
                            Assunto:{contato.assunto}<br />
                            Mensagem:{contato.mensagem}<br />
                            <Button id="buttoncrud" variant="contained" color="primary" >Detalhes</Button>
                            <Button id="buttoncrud" variant="contained" color="secondary">Alterar</Button>
                            <Button id="buttoncrud" variant="contained" color="danger" onClick={() => this.deleteContato(contato.id)} >Excluir</Button>

                        </Paper>
                    ))
                    }


                </Paper>
            </Container>
        )
    }
}

export default ContatoService