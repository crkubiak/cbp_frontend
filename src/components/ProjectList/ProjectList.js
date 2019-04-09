import React, { Component } from 'react';
import ProjectTeaser from './../ProjectTeaser/ProjectTeaser.js'

class ProjectList extends Component {
  createProjectTeasers = () => {
    const projectTeaser = this.props.projects.map((project, index) => {
      
      return <ProjectTeaser skey={index} project={project} />
    })
    return projectTeaser
  }
  render() {
    
    return (
      <div>
        {this.createProjectTeasers()}
      </div>
      
    );
  }
}
export default ProjectList;
