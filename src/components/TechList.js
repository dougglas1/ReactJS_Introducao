import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
  //static defaultProps ={
  //  tech: 'Oculto'
  //}
  
  //static propTypes ={
  //  tech: PropTypes.string,
  //}

  state = {
    newTech: '',
    techs: []
  }
  
  // Executado assim que o componente aparece em tela
  componentDidMount() {
    const techs = localStorage.getItem('techs');
    
    // Caso tenha techs, carrega do navegador
    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }
  
  // Executado sempre que houver alterações nas props ou estado
  componentDidUpdate(prevProps, prevState) {
    // this.props
    // this.state

    // Grava no navegador
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }

  // Executado quando o componente deixa de existir
  componentWillUnmount() {

  }

  // Caso fosse criado handleInputChange(e) { }
  // Não teria acesso a variável this

  // Arrow Function
  handleInputChange = e => {
    //console.log(e.target.value);
    this.setState({ newTech: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault(); // Não atualizar a tela
    
    this.setState({ 
      techs: [... this.state.techs, this.state.newTech],
      newTech: ''
    });
  }

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem 
              key={tech} 
              tech={tech} 
              onDelete={() => this.handleDelete(tech)} 
            />
          ))} 
        </ul>
        <input 
          type="text" 
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;