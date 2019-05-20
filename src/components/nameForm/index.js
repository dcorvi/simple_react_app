import React, { Component } from 'react';
import './index.css';

class NameForm extends Component {
  render() {
    return (
      <form action="" method="POST" className="NameForm">
        <label htmlFor="name">Your Name: </label>
        <input name="name" type="text" value={this.props.name} onChange={this.props.getName} />
      </form>
    );
  }
}

export default NameForm;
