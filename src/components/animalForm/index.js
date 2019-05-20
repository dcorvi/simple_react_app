import React, { Component } from 'react';
import './index.css';

class AnimalForm extends Component {
  render() {
      return (
        <form action="" method="POST" className="AnimalForm">
        <label htmlFor="name">Animal Name: </label>
        <input name="name" type="text" value={this.props.animalName} onChange={this.props.getAnimalName} />
        </form>
    );
  }
}

export default AnimalForm;
