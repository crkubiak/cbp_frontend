import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ProjectTeaser extends Component {
  render() {
    return (
      <div className="center-text">
        <Link to={`/projects/${this.props.skey + 1}`}>Project Name: {this.props.project.project_name}</Link>
        
      </div>
    )
  }
}

export default ProjectTeaser;