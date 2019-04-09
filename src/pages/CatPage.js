import React, { Component } from 'react';
import CbpAPI from '../api/CbpAPI.js';
import Cat from '../components/Cat/Cat.js';

class CatPage extends Component {
  state = {
    cat: null
  }

  componentDidMount() {
    CbpAPI.fetchCatByID(this.props.match.params.catID)
    .then((apiResponseJSON) => {
      this.setState ({
        cat: apiResponseJSON
      })
    })
  }

  render() {
    return (
      <div>
        <h1> Cats Cats Cats </h1>
        {this.state.cat && <Cat cat={this.state.cat} />}
      </div>
    );
  }
}

export default CatPage;