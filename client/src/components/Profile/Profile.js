import React, { Component } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Segment,
  Message,
  Container,
  Header,
  Select,
  TextArea } from 'semantic-ui-react';
const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class FormExampleFieldControl extends Component {
  state = {
    firstname:"",
    lastname:"",
    about:"",
    isAgreed: "false"
  }

  handleChange = (e, { name,value }) => this.setState({ [name]: value })
  handleSubmit = e => {
    this.setState({
      firstname:"",
      lastname:"",
      about:"",
      isAgreed: "true"
    });
  };
  render() {
    const { firstname, lastname, about, isAgreed } = this.state
    return (
      <Container>
        <Header as="h1" dividing>Please enter the details:</Header>
        <Message info><p>We protect your data safely and we will not use it for monetory purposes.</p></Message>
        <Segment inverted>
          <Form inverted onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Input
                label="First name"
                name="firstname"
                placeholder="First name"
                value={firstname}
                onChange={this.handleChange}
              />
              <Form.Input
                label="Last name"
                name="lastname"
                placeholder="Last name"
                value={lastname}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Field control={TextArea} label='About' name="about" onChange="{this.handleChange}" value={about} placeholder='Tell us more about you...' />
            <Form.Group inline><Form.Field control={Checkbox} label='I agree to the Terms and Conditions' name="isAgreed" value={isAgreed} />
              <a href="https://google.com" >Terms & Conditions</a>
            </Form.Group>
            <Form.Button inverted color='green'>
              Submit
            </Form.Button>
          </Form>
        </Segment>
      </Container>
    )
  }
}

export default FormExampleFieldControl
