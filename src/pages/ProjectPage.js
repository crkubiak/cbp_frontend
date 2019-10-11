import React, { Component } from 'react';
import CbpAPI from '../api/CbpAPI.js';
import Project from '../components/Project/Project'

class ProjectPage extends Component {
  state = {
    project: null
  }

  componentDidMount() {
    CbpAPI.fetchProjectByID(this.props.match.params.projectID)
    .then((apiResponseJSON) => {
      this.setState ({
        project: apiResponseJSON
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.project && <Project project={this.state.project} />}
      </div>
    );
  }
}

export default ProjectPage;

