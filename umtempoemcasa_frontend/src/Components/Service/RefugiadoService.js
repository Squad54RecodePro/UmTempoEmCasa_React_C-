import React from 'react';
import axios from 'axios';


class RefugiadoService extends React.Component() {

    state = {
      refugiados: []
    }

  componentDidMount(){
        axios.get('https://localhost:44351/api/Refugiados')
          .then(res => {
            const dadosrefugiados = res.data
            this.setState({ refugiados: dadosrefugiados })
          })
      }
      
  componentDidUpdate() {
        this.componentDidMount();
      }

  deleteRefugiado(id) {
        if (window.confirm('Deseja excluir o Cadastro?')) {
          fetch('https://localhost:44351/api/Refugiados/' + id, {
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
            <h1>Refugiados</h1>

            <Paper elevation={3} style={paperStyle}>

              {this.state.refugiados.map(refugiado => (
                <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={refugiado.id}>
                  Nome:{refugiado.nome}<br />
                  E-mail:{refugiado.email}<br />
                  Idade:{refugiado.idade}<br />
                  Nascimento:{refugiado.nascimento}<br />
                  Endereço:{refugiado.endereco}<br />
                  CEP:{refugiado.cep}<br />
                  Telefone:{refugiado.telefone}<br />
                  Senha:{refugiado.senha}<br />
                  <Button id="buttoncrud" variant="contained" color="primary" >Detalhes</Button>
                  <Button id="buttoncrud" variant="contained" color="secondary">Alterar</Button>
                  <Button id="buttoncrud" variant="contained" color="danger" onClick={() => this.deleteRefugiado(refugiado.id)} >Excluir</Button>

                </Paper>
              ))
              }


            </Paper>
          </Container>
        )

      }
    }
export default RefugiadoService