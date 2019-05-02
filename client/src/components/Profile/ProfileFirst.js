import React from 'react';
import {
   Button, Icon, Divider, Container, Image, Header, Item, Label, Grid
} from "semantic-ui-react";
const style = {
  h1: {
    marginTop: '3em',
  }
};
const Details=()=> {
  return(
    <Item.Meta>

    </Item.Meta>
  )
}
class ProfileFirst extends React.Component {
  render () {
    return(
      <Container>
        <Header as="h1" style={style.h1}>Profile Details:</Header>

        <Divider />
        <Item.Group divided>
          <Item.Content>
            <Item.Header as='a'>Name</Item.Header>
            <Item.Description>
              <Details/>
            </Item.Description>
            <Item.Extra>
              <Button primary floated='right'>
                Edit Details
                <Icon name='right chevron' />
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item.Group>
      </Container>
    );
  }
}

export default ProfileFirst;
