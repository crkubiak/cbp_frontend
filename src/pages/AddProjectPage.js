import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router';
import CbpAPI from '../api/CbpAPI.js'

class AddProjectPage extends Component {
  state = {
    redirect: false
  }
  
  handleSubmit(event){
    event.preventDefault();
    const projectObject = {
      project_name: event.target.elements[0].value,
      project_cross_one: event.target.elements[1].value,
      project_cross_two: event.target.elements[2].value,
      project_address: event.target.elements[3].value,
      project_city: event.target.elements[4].value,
      project_state: event.target.elements[5].value,
      project_zip: event.target.elements[6].value,
      project_submitter: event.target.elements[7].value,
      project_phone: event.target.elements[8].value,
      project_email: event.target.elements[9].value,
      project_description: event.target.elements[10].value,
      project_status: event.target.elements[11].value
    }
    
    CbpAPI.addProject(projectObject)
      .then((response) => { this.setState({ redirect: true }) })
  }

  render() {
    const { redirect } = this.state;
      if (redirect) {
      return <Redirect to = "/projects" />
    }
    
    return (
      <div>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Group controlId="project_name">
            <Form.Label>Project Name</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="project_cross_one">
            <Form.Label>Cross Street #1</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="project_cross_two">
            <Form.Label>Cross Street #2</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="project_address">
            <Form.Label>Address</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="project_city">
            <Form.Label>City</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="project_state">
            <Form.Label>State</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="project_zip">
            <Form.Label>ZIP</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="project_submitter">
            <Form.Label>Reporting individual</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="project_phone">
            <Form.Label>Phone #</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="project_email">
            <Form.Label>E-mail</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="project_description">
            <Form.Label>Description</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="project_status">
            <Form.Label>Status</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
export default AddProjectPage;

// <Form onSubmit={(e) => this._handleSubmit(e)>
//   <Form.Row>
//     <Form.Group as={Col} controlId="formGridEmail">
//       <Form.Label>Email</Form.Label>
//       <Form.Control type="email" placeholder="Enter email" />
//     </Form.Group>

//     <Form.Group as={Col} controlId="formGridPassword">
//       <Form.Label>Password</Form.Label>
//       <Form.Control type="password" placeholder="Password" />
//     </Form.Group>
//   </Form.Row>

//   <Form.Group controlId="formGridAddress1">
//     <Form.Label>Address</Form.Label>
//     <Form.Control placeholder="1234 Main St" />
//   </Form.Group>

//   <Form.Group controlId="formGridAddress2">
//     <Form.Label>Address 2</Form.Label>
//     <Form.Control placeholder="Apartment, studio, or floor" />
//   </Form.Group>

//   <Form.Row>
//     <Form.Group as={Col} controlId="formGridCity">
//       <Form.Label>City</Form.Label>
//       <Form.Control />
//     </Form.Group>

//     <Form.Group as={Col} controlId="formGridState">
//       <Form.Label>State</Form.Label>
//       <Form.Control as="select">
//         <option>Choose...</option>
//         <option>...</option>
//       </Form.Control>
//     </Form.Group>

//     <Form.Group as={Col} controlId="formGridZip">
//       <Form.Label>Zip</Form.Label>
//       <Form.Control />
//     </Form.Group>
//   </Form.Row>

//   <Form.Group id="formGridCheckbox">
//     <Form.Check type="checkbox" label="Check me out" />
//   </Form.Group>

//   <Button variant="primary" type="submit">
//     Submit
//   </Button>
// </Form></Form>;