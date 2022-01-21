import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

export default class UserForm extends Component {
  state = { user: "", city: "" };

  onFormChange = (e) => {
    let name = e.target.name;
    var value = e.target.value;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="user"
              id="exampleEmail"
              placeholder="with a placeholder"
              onChange={this.onFormChange}
            />
            <h2>Inputa daxil edilen soz:{this.state.user}</h2>
            <Input type="text" name="city" onChange={this.onFormChange} />
            <h2>City olan soz:{this.state.city}</h2>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
