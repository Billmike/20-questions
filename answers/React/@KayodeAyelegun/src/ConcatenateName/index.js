import React, { Component } from 'react';
import './ConcatenateName.scss';

class ConcatenateName extends Component {
  state = {
    firstName: '',
    lastName: '',
    age: '',
    showDetails: false
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value, showDetails: false });
  }

  showName = () => {
    this.setState(prevState => ({ showDetails: true }))
  }

  render() {
    const { firstName, lastName, age, showDetails } = this.state;
    return (
      <div className="input-wrapper-container">
        <h3>Name Concatenation</h3>
        <div className="input-container">
          <p>First Name <span style={{ color: 'red' }}>*</span></p>
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            onChange={this.handleChange}
            value={firstName}
          />
        </div>
        <div className="input-container">
          <p>Last Name <span style={{ color: 'red' }}>*</span></p>
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            onChange={this.handleChange}
            value={lastName}
          />
        </div>
        <div className="input-container">
          <p>Age <span style={{ color: 'red' }}>*</span></p>
          <input
            type="numeric"
            name="age"
            placeholder="Age"
            onChange={this.handleChange}
            value={age}
          />
        </div>
        { firstName && lastName && age && showDetails && <p>{`Welcome, ${firstName} ${lastName} (${age}) `}</p> }
        <button
          onClick={this.showName}
          disabled={!(firstName && lastName && age)}
        >
          Print!
        </button>
      </div>
    )
  }
}

export default ConcatenateName;
