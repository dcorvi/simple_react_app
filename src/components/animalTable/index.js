import React, { Component } from 'react';
import './index.css';

class AnimalTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Species</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.data[0] &&
              this.props.data.map( animal =>
                <tr key={animal.name}>
                  <td>{animal.name}</td>
                  <td>{animal.species}</td>
                </tr>
              )
          }
        </tbody>
      </table>
    );
  }
}

export default AnimalTable;
