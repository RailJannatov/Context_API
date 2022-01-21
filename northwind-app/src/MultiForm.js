import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default class MultiForm extends Component {
  state = { email: "", password: "", city: "", country: [] };
  onChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let values = Array.from(e.target.selectedOptions, (option) => option.value);
    if (name === "country") {
      this.setState({ [name]: values });
    } else {
      this.setState({ [name]: value });
    }
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    alert(
      "email " +
        this.state.email +
        " password " +
        this.state.password +
        " city " +
        this.state.city +
        "country" +
        this.state.country
    );
  };
  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
              onChange={this.onChangeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password placeholder"
              onChange={this.onChangeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">Select City</Label>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.onChangeHandler}
            >
              <option>Baku</option>
              <option>London</option>
              <option>Amsterdam</option>
              <option>Berlin</option>
              <option>Paris</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelectMulti">Select Multiple Country</Label>
            <Input
              type="select"
              name="country"
              id="exampleSelectMulti"
              onChange={this.onChangeHandler}
              multiple
            >
              <option>USA</option>
              <option>Germany</option>
              <option>Netherland</option>
              <option>Austria</option>
              <option>Ukraine</option>
            </Input>
          </FormGroup>
          <Button onClick={this.onSubmitHandler}>Submit</Button>
        </Form>
      </div>
    );
  }
}
