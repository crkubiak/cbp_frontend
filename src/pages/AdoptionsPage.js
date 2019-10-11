import React, { Component } from 'react';
import CbpAPI from '../api/CbpAPI.js';
import AdoptionList from '../components/AdoptionList/AdoptionList.js';


class AdoptionsPage extends Component {
  state = {
    adoptions: []
  }

  componentDidMount(){
    CbpAPI.fetchAdoptions()
      .then((apiResponseJSON) => {
        this.setState({
          adoptions: apiResponseJSON
        })
      }
    )
  }
  render() {
    return (
      <div>
        <h1> Adoptions Page </h1>
        <AdoptionList adoptions={this.state.adoptions} />
      </div>
    );
  }
}

export default AdoptionsPage;