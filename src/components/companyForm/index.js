import React, { Component } from 'react';
import './index.css';

class CompanyForm extends Component {
  render() {
      return (
        <form action="" method="POST" className="CompanyForm">
        <label htmlFor="name">Company Name: </label>
        <input name="name" type="text" value={this.props.company} onChange={this.props.getCompany} />
        </form>
    );
  }
}

export default CompanyForm;
