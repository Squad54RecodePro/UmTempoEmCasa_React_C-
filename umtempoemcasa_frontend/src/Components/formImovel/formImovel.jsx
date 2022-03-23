import React, { Component } from 'react'
import './style.css'

class formImovel extends Component {
    state = {
        id: 0,
        endereco: '',
        cidade: '',
        cep: '',
    }
    cadastrar = (e) => {

        e.preventDefault()
        const refugiado = this.state
        console.log(refugiado)
        fetch("https://localhost:44351/api/Imoveis", {
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
                <Paper elevation={3} className="margintop">
                    <h3>Cadastro de refugiado</h3>

                    <form id='desingcadastro' className='form-control' noValidate autoComplete="off">

                        <div>
                            <TextField id="outlined-basic" label="Endereço" variant="outlined" fullWidth
                                onChange={(e) => this.setState({ endereco: e.target.value })}
                            />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Cidade" variant="outlined" fullWidth

                                onChange={(e) => this.setState({cidade: e.target.value })}
                            />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="CEP" variant="outlined" fullWidth
                                onChange={(e) => this.setState({cep: e.target.value })}
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
        )
    }
}

export default formImovel