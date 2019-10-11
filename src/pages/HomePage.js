import React, { Component } from 'react';
import logo from './static/cbp_logo.jpg'

class HomePage extends Component {
  

  render() {
    return (
      <div>
        <br/>
        <br/>
        <img className="logo" src={logo} alt="logo"/>
        <br/>
        <br/>
        <p>Thank you for checking out Castle Blackpaw.  We are an active Trap Neuter Release team that currently operates on the south side of Chicago.  </p>
        <h1 className="thick"> Est. 2013 </h1>
      </div>
    );
  }
}

export default HomePage;
