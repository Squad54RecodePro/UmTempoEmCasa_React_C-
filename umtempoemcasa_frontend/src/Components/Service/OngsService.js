import React from 'react'

class OngsService extends React.Component() {
    state = {
        ongs: []
    }
    componentDidMount(){
        axios.get("http://localhost:8080/cliente/getAll")
        .then(res=>{
            const dadosongs=res.data
            this.setState({ongs:dadosongs})
        })
    }
    componentDidUpdate(){
        this.componentDidMount();
    }

    deleteCliente(id){
        if(window.confirm('Deseja excluir o Cadastro?')){
            fetch('http://localhost:8080/cliente/'+id,{
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
                        CNPJ:{ong.email}<br />
                        Endereço:{ong.email}<br />
                        Telefone:{ong.email}<br />
                        <Button id="buttoncrud" variant="contained" color="primary" >Detalhes</Button>
                        <Button id="buttoncrud" variant="contained" color="secondary">Alterar</Button>
                        <Button id="buttoncrud" variant="contained" color="danger" onClick={()=>this.deleteCliente(cliente.id)} >Excluir</Button>

                    </Paper>
                ))
                }


            </Paper>
        </Container>
    )
}
}

export default OngsService