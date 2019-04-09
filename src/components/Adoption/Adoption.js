import React, { Component } from 'react';

class Adoption extends Component {
  render() {
    const adoption = this.props.adoption
    return (
      <div>
        <br />
        <br />
        <br />
        <h1></h1>
        <br />
        <br />
        <p>Applicant: {adoption.adoption_first_name} {adoption.adoption_last_name}</p>
      </div>
    )
  }
}

export default Adoption;