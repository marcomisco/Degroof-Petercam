import React from "react";
import { StatusBar } from "react-native";
import  base  from '../../firebase'
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
export default class HomeScreen extends React.Component {
  state = { currentUser: null }
  componentDidMount() {
    const { currentUser } = base.auth().currentUser.uid
    this.setState( {currentUser})
    
}
  render() {
    const { currentUser } = this.state
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Chat App to talk some awesome people!  {currentUser}</Text>
              </Body>
            </CardItem>
          </Card>
          <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Profile")}>
            <Text>Goto Profiles</Text>
          </Button>
          <Button full rounded primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Missing")}>
            <Text>Goto Missing</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
