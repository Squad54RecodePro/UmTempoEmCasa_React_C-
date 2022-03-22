import React from 'react'

class OngsService extends React.Component() {
    state = {
        ongs: []
    }
    componentDidMount(){
        axios.get('https://localhost:44351/api/Ongs')
        .then(res=>{
            const dadosongs = res.data
            this.setState({ongs:dadosongs})
        })
    }
    componentDidUpdate(){
        this.componentDidMount();
    }

    deleteOng(id){
        if(window.confirm('Deseja excluir o Cadastro?')){
            fetch('https://localhost:44351/api/Ongs/' + id, {
                method:'DELETE',
                header:{'Accept':'application/json',
                'Content-Type':'application/json'    
            }
            })
        }
    }



render() {
    
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    return (
        <Container>
            <h1>Ongs</h1>

            <Paper elevation={3} style={paperStyle}>

                {this.state.ongs.map(ong => (
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={ong.id}>
                        Nome:{ong.nome}<br />
                        E-mail:{ong.email}<br />
                        CNPJ:{ong.cnpj}<br />
                        Endereço:{ong.endereco}<br />
                        Telefone:{ong.telefone}<br />
                        <Button id="buttoncrud" variant="contained" color="primary" >Detalhes</Button>
                        <Button id="buttoncrud" variant="contained" color="secondary">Alterar</Button>
                        <Button id="buttoncrud" variant="contained" color="danger" onClick={()=>this.deleteOng(ong.id)} >Excluir</Button>

                    </Paper>
                ))
                }


            </Paper>
        </Container>
    )
}
}

export default OngsService