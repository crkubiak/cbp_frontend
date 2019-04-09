import React, { Component } from 'react';
import CatTeaser from './../CatTeaser/CatTeaser.js'

class CatList extends Component {
  createCatTeasers = () => {
    const catTeaser = this.props.cats.map((cat, index) => {
      return <CatTeaser skey={index} cat={cat} />
    })
    return catTeaser
  }
  render() {
    return (
      <div>
        {this.createCatTeasers()}
      </div>
      
    );
  }
}
export default CatList;