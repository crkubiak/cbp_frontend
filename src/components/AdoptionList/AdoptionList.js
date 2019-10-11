import React, { Component } from 'react';
import AdoptionTeaser from './../AdoptionTeaser/AdoptionTeaser'

class AdoptionList extends Component {
  createAdoptionTeasers = () => {
    const adoptionTeaser = this.props.adoptions.map((adoption, index) => {
      return <AdoptionTeaser skey={index} adoption={adoption} />
    })
    return adoptionTeaser
  }
  render() {
    return (
      <div>
        {this.createAdoptionTeasers()}
      </div>
      
    );
  }
}
export default AdoptionList;