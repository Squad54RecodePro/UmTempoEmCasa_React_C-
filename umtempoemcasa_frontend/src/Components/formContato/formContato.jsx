import React, { Component } from 'react'
import './style.css'

class formContato extends Component {
    state = {
        id: 0,
        nome: '',
        email: '',
        assunto: '',
        mensagem: ''
    }
    cadastrar = (e) => {

        e.preventDefault()
        const refugiado = this.state
        console.log(refugiado)
        fetch("https://localhost:44351/api/Contatos", {
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
                            <TextField id="outlined-basic" label="Nome" variant="outlined" fullWidth
                                onChange={(e) => this.setState({ nome: e.target.value })}
                            />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="E-mail" variant="outlined" fullWidth

                                onChange={(e) => this.setState({ email: e.target.value })}
                            />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Assunto" variant="outlined" fullWidth
                                onChange={(e) => this.setState({ assunto: e.target.value })}
                            />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Mensagem" variant="outlined" fullWidth
                                onChange={(e) => this.setState({ mensagem: e.target.value })}
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
export default formContato