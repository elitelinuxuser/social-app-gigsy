import React,{ Component } from 'react';
import Cards from './Cards';
import {
  Header,
  Container,
  Divider,
  Message
} from 'semantic-ui-react';
const style = {
  c: {
    padding: '2em 2em'
  }
};
class Admin extends Component {
  render() {
    return(
      <Container>
        <Divider/>
        <Header as="h1" dividing>Admin Page:</Header>
        <Message info>Please approve or reject the request to post</Message>
        <Header as="h2">
          List of requests:
        </Header>
        <Container style={style.c}>
          <Cards/>
        </Container>
      </Container>
    );
  }
}
export default Admin;
