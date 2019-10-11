import React, { Component } from 'react';

class Cat extends Component {
  render() {
    const cat = this.props.cat
    return (
      <div>
        <br />
        <br />
        <br />
        <h1>{cat.cat_name}</h1>
        <br />
        <br />
        <p>Age: {cat.cat_age}</p>
        <p>Sex: {cat.cat_sex}</p>
        <p>Size: {cat.cat_size}</p>
        <p>Description: {cat.cat_description}</p>
      </div>
    )
  }
}

export default Cat;