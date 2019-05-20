import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Information from './components/information';
import CompanyForm from './components/companyForm';
import AnimalTable from './components/animalTable';
import AnimalForm from './components/animalForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      'company': '',
      'data': []
    }
  }

  componentWillMount() {
    this.setState({
      'company': 'Coding Temple',
    });
  }

  getCompany = event => {
    this.setState({ 'company': event.target.value });
  }

  getAnimals = event => {
    fetch('https://learnwebcode.github.io/json-example/animals-1.json')
      .then(response => response.json())
      .then(data => this.setState({ data }));
    console.log(this.state.data);
  }

  handleAniClick = event => {
    this.setState({ '': event.target.value });
  }

  render() {
    return (
      // javascript
      <div className="App">
        <CompanyForm getCompany={this.getCompany} company={this.state.company} />
        <Header company={this.state.company} />
        <Information company={this.state.company} />

        <h1>Animals</h1>
        <AnimalForm handleAniClick={this.handleAniClick} animal={this.animalName}/>
        <p></p>
        <button onClick={this.getAnimals}>Get Animals</button>
        {
          this.state.data[0] &&
            <AnimalTable data={this.state.data} />
        }
      </div> // javascript
    );
  }
}

export default App;
