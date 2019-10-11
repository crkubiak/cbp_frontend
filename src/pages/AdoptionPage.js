import React, { Component } from 'react';
import CbpAPI from '../api/CbpAPI.js';
import Adoption from '../components/Adoption/Adoption.js';

class AdoptionPage extends Component {
  state = {
    adoption: null
  }

  componentDidMount() {
    CbpAPI.fetchAdoptionByID(this.props.match.params.adoptionID)
    .then((apiResponseJSON) => {
      this.setState ({
        adoption: apiResponseJSON
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.adoption && <Adoption adoption={this.state.adoption} />}
      </div>
    );
  }
}

export default AdoptionPage;