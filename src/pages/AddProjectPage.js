import React, { Component } from 'react';
import { Form, FormGroup, Label, Button , Input, Col } from 'reactstrap'
import CbpAPI from '../api/CbpAPI.js'

class NewProjectPage extends Component {

  state = {
    succsessfulSubmit: false
  }

  _handleSubmit(e) {
    e.preventDefault()
    const projectObject = {
      title: e.target.elements[0].value,
      byline: e.target.elements[1].value,
      abstract: e.target.elements[2].value,
    }
    CbpAPI.addProject(projectObject, this.props.user.id)
      .then((response) => {
        if(response.status === 200) {
          this.setState ({
            succsessfulSubmit: true
          })
        } else {
          alert('Project Not Submitted')
        }
      })
  }

  render() {
    return (
      <div>
        {this.state.succsessfulSubmit ? <h1>Article Submitted</h1> :
        <Form onSubmit={(e) => this._handleSubmit(e) }>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>


          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="title" className="mr-sm-2">Title</Label>
            <Input type="text" name="title" placeholder="Title" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="byline" className="mr-sm-2">ByLine</Label>
            <Input type="text" name="byline" placeholder="ByLine" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">Abstract</Label>
            <Input type="text" name="abstract"  placeholder="Abstract" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      }
      </div>
    )
  }
}

export default NewProjectPage;

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