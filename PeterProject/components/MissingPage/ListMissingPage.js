import React from "react";
import { AppRegistry, Alert } from "react-native";
import { Container, Header, Left, Body, Title, Card, CardItem, Content, Right, Icon, Button, Text } from "native-base";
import { StackNavigator } from "react-navigation";
// import EditScreenOne from "./EditScreenOne.js";
// import EditScreenTwo from "./EditScreenTwo.js";
export default class Profile extends React.Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Icon active name="paper-plane" />
              <Text>Show List Missing Page here</Text>
              <Right>
                <Icon name="close" />
              </Right>
            </CardItem>
          </Card>
          <Button full rounded primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Detail")}>
            <Text>Detail Missing</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
Profile.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.openDrawer()}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Missing</Title>
      </Body>
      <Right />
    </Header>
  )
});
