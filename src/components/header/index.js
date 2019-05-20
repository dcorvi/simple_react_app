import React, { Component } from 'react';
import './index.css';

class Header extends Component {

  constructor() {
    super();
    this.state = {
      'linkName': ''
    };
  }

  componentWillMount() {
    this.setState({
    'linkName': 'Contact Us'
    });
  }

  render() {
    // console.log(this.props);
    return (
      <header className="Header">
        <h1>{this.props.company}</h1>
        <ul>
          <li>Home</li>
          <li>{this.state.linkName}</li>
        </ul>
      </header>
    );
  }
}

export default Header;
