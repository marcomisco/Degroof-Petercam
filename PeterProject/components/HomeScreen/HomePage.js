import React from "react";
import { StatusBar,Image,View } from "react-native";
import  base  from '../../firebase'
import Foot from '../Footer/Footer'
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
            <Title>Degroof Petercam</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
        <Image
              square
              style={{ height: 120, width: 210,}}
              source={require('../../assets/images/LogoDP2.png')}
            />
          <Card>
            <CardItem>
              <Body>
                <Text>wilstef{currentUser}</Text>
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
          <View>
            <View>
              <Text>Mission acceptée</Text>
            </View>
            <View>
              <View>
                <Text>Mission 1</Text>
              </View>
              <View>
                <Text>Mission 4</Text>
              </View>
            </View>
          </View>
          <View>
            <View>
              <Text>Mission en attente</Text>
            </View>
            <View>
              <View>
                <Text>Mission 2</Text>
              </View>
              <View>
                <Text>Mission 3</Text>
              </View>
            </View>
          </View>
        </Content>
        <Foot/>
      </Container>
    );
  }
}
