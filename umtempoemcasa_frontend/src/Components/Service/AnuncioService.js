import React from 'react'

class AnuncioService extends React.Component() {
    state = {
        anuncios: []
    }

    componentDidMount() {
        axios.get('https://localhost:44351/api/Anuncios')
            .then(res => {
                const dadosanuncios = res.data
                this.setState({ anuncios: dadosanuncios })
            })
    }
    componentDidUpdate() {
        this.componentDidMount();
    }

    deleteAnuncio(id) {
        if (window.confirm('Deseja excluir o Anúncio?')) {
            fetch('https://localhost:44351/api/Anuncios/' + id, {
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
                <h1>Anuncios</h1>

                <Paper elevation={3} style={paperStyle}>

                    {this.state.anuncios.map(anuncio => (
                        <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={anuncio.id}>
                            Início:{anuncio.inicio}<br />
                            Valor:{anuncio.valor}<br />
                            Nome:{anuncio.nome}<br />
                            <Button id="buttoncrud" variant="contained" color="primary" >Detalhes</Button>
                            <Button id="buttoncrud" variant="contained" color="secondary">Alterar</Button>
                            <Button id="buttoncrud" variant="contained" color="danger" onClick={() => this.deleteAnuncio(anuncio.id)} >Excluir</Button>

                        </Paper>
                    ))
                    }


                </Paper>
            </Container>
        )
    }
}

export default AnuncioService