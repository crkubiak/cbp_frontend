import React, { Component } from 'react';
import CbpAPI from '../api/CbpAPI.js';
import CatList from '../components/CatList/CatList.js';

class CatsPage extends Component {
  state = {
    cats: []
  }

  componentDidMount(){
    CbpAPI.fetchCats()
      .then((apiResponseJSON) => {
        this.setState({
          cats: apiResponseJSON
        })
      }
    )
  }

  render() {
    return (
      <div>
        <h1> Cats Cats Cats </h1>
        <CatList cats={this.state.cats} />
      </div>
    );
  }
}

export default CatsPage;