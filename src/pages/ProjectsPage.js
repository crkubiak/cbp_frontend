import React, { Component } from 'react';
import ProjectList from '../components/ProjectList/ProjectList.js'
import CbpAPI from '../api/CbpAPI.js';

class ProjectsPage extends Component {
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
      <div className="projects">
        <h1> Our Projects </h1>
        <ProjectList projects={this.state.projects} />
        <br/>
        <br/>
        <a href={'/add-project'}><button>Submit a Project</button></a>
      </div>
    );
  }
}

export default ProjectsPage;

