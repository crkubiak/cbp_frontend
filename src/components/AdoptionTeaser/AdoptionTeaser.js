import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AdoptionTeaser extends Component {
  render() {
    return (
      <div className="center-text">
        <Link to={`/adoptions/${this.props.skey + 1}`}>Application from: {this.props.adoption.cat}</Link>
        
      </div>
    )
  }
}

export default AdoptionTeaser;