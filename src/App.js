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
      'data': [],
      'animal': ''
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

  searchAnimal = event => {
    event.preventDefault();

    let animal = event.target.name.value;

    this.setState({ animal });

    fetch('https://learnwebcode.github.io/json-example/animals-1.json')
      .then(response => response.json())
      .then(data => {
        // filter out all animals with correct name
        let filtered = data.filter( row => {
          return row.name.toLowerCase().indexOf(animal.toLowerCase()) >= 0;
        });

        this.setState({ 'data': filtered })
      });
  }

  render() {
    return (
      // javascript
      <div className="App">
        <CompanyForm getCompany={this.getCompany} company={this.state.company} />
        <Header company={this.state.company} />
        <Information company={this.state.company} />

        <h1>Animals</h1>
        <button onClick={this.getAnimals}>Get Animals</button>
        <AnimalForm animal={this.state.animal} searchAnimal={this.searchAnimal} />
        {
          this.state.data[0] &&
            <AnimalTable data={this.state.data} />
        }
      </div> // javascript
    );
  }
}

export default App;
