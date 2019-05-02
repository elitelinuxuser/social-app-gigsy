import React, {Component} from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

class Cards extends React.Component {
  state = {
    isAgreed: false
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      isAgreed: true
    });
  };
  render () {
    const {  } = this.state;
    return(
      <Card>
        <Card.Content>
          <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
          <Card.Header>{this.name}</Card.Header>
          <Card.Description>
            Requires permission to post!
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Approve
            </Button>
            <Button basic color='red'>
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default Cards;
