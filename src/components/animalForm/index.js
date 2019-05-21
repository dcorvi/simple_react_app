import React, { Component } from 'react';
import './index.css';

class AnimalForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.searchAnimal} action="" method="POST" className="AnimalForm">
        <label htmlFor="name">Animal Name: </label>
        <input name="name" type="text" placeholder={this.props.animal} />
        <input name="submit" type="submit" value="Search Animal" />
      </form>
    );
  }
}

export default AnimalForm;
