import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import UserAPI from '../api/UserAPI';

class LoginPage extends Component {

  _handleSubmit(e) {
    e.preventDefault()
    const credObject = {
      email: e.target.elements[0].value,
      password: e.target.elements[1].value
    }
    UserAPI.login(credObject)
    .then((response) => response.json())
    .then((user) => this.props._handleLogin(user))
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <Form inline onSubmit={(e) => this._handleSubmit(e)}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      </div>
    );
  }
}

export default LoginPage;
