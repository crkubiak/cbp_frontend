import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class CatTeaser extends Component {
  render() {
    console.log(this.props.cat.id)
    return (
      <div className="center-text">
        <Link to={`/cats/${this.props.cat.skey + 1}`}><h2>Cat: {this.props.cat.cat_name}</h2></Link>
        
      </div>
    )
  }
}

export default CatTeaser;