import React, { Component } from 'react';
import Header from './Header.jsx';
import Noticias from './Newss.jsx';
import Formulario from './Formularie.jsx';

class Profile extends Component {
  state = {
    noticias: []
  }

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = (categoria = 'general') => {
    console.log(categoria);
    const API = '8167045aa28c41cf9c694c0449e340e2';
    let url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${API}`
    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(noticias => {
        this.setState({
          noticias: noticias.articles
        })
      })
  }

  render() {
    return (
      <div className="contenedor-app">
       <Header titulo="Noticias" />
       <div className="container white contenedor-noticias">
          <Formulario 
            consultarNoticias={this.consultarNoticias}
          />
          <Noticias 
            noticias={this.state.noticias}
          />
       </div>
      </div>
    );
  }
}

export default Profile;
