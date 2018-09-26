import React from "react";
import { AppRegistry, Alert } from "react-native";
import { Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  H1 } from "native-base";
export default class EditScreenOne extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Detail Missing</Title>
        </Body>
        <Right />
      </Header>
    )
  });
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Icon active name="paper-plane" />
              <Text>Detail Missing</Text>
              <Right>
                <Icon name="close" />
              </Right>
            </CardItem>
          </Card>
          <Button full rounded primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Accet")}>
            <Text>Accept Missing</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
