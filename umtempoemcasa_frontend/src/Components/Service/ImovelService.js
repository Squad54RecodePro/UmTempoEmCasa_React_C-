import React from 'react'

class ImovelService extends React.Component() {
    state = {
        imoveis: []
    }

    componentDidMount() {
        axios.get("http://localhost:8080/cliente/getAll")
            .then(res => {
                const dadosimoveis = res.data
                this.setState({ imoveis: dadosimoveis })
            })
    }
    componentDidUpdate() {
        this.componentDidMount();
    }

    deleteImovel(id) {
        if (window.confirm('Deseja excluir o Cadastro?')) {
            fetch('http://localhost:8080/cliente/' + id, {
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
                <h1>Imóveis</h1>

                <Paper elevation={3} style={paperStyle}>

                    {this.state.imoveis.map(imovel => (
                        <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={imovel.id}>
                            Endereço:{imovel.endereco}<br />
                            Cidade:{imovel.cidade}<br />
                            CEP:{imovel.cep}<br />
                            <Button id="buttoncrud" variant="contained" color="primary" >Detalhes</Button>
                            <Button id="buttoncrud" variant="contained" color="secondary">Alterar</Button>
                            <Button id="buttoncrud" variant="contained" color="danger" onClick={() => this.deleteCliente(cliente.id)} >Excluir</Button>

                        </Paper>
                    ))
                    }


                </Paper>
            </Container>
        )
    }
}

export default ImovelService