import React, { Component } from 'react';
import ProjectList from '../components/ProjectList/ProjectList.js'
import CbpAPI from '../api/CbpAPI.js';

class HomePage extends Component {
  state = {
    projects: []
  }

  componentDidMount(){
    CbpAPI.fetchProjects()
      .then((apiResponseJSON) => {
        this.setState({
          projects: apiResponseJSON
        })
      }
    )
  }

  render() {
    return (
      <div>
        <h1> Home Page </h1>
        <ProjectList projects={this.state.projects} />
      </div>
    );
  }
}

export default HomePage;
