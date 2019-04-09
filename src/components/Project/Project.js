import React, { Component } from 'react';

class Project extends Component {
  render() {
    const project = this.props.project
    return (
      <div>
        <br />
        <br />
        <br />
        <h1>{project.project_name}</h1>
        <br />
        <br />
        <p>Created: {project.created_at}</p>
        <p>Contact: {project.project_phone} / {project.project_email}</p>
        <p>Submitted by: {project.project_submitter}</p>
        <p>Cross Streets: {project.project_cross_one} & {project.project_cross_two}</p>
        <p>Address{project.project_address} {project.project_city}, {project.project_state} {project.project_zip}</p>
        <p>{project.project_description}</p>
        <p>{project.project_status}</p>
      </div>
    )
  }
}

export default Project;