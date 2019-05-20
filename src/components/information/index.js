import React, { Component } from 'react';
import './index.css';
import NameForm from '../nameForm';

class Information extends Component {
  constructor() {
    super();
    this.state = {
      'name': '',
      'age': null
    };
  }

  componentWillMount() {
    this.setState({
      'name': 'Jon Snow',
      'age': 50
    });
  }

  getName = event => {
    this.setState({ 'name': event.target.value });
  }

  render() {
    return (
      <div className="Information">
        <h1>Information for {this.props.company}</h1>
        <NameForm name={this.state.name} getName={this.getName} />
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
      </div>
    );
  }
}

export default Information;
