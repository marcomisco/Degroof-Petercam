import React from "react";
import {StyleSheet, AppRegistry, View, Image } from "react-native";
import { Container, Header, Left, Body, Title, Card, CardItem, Content, Right, Icon, Button, Text } from "native-base";
import { StackNavigator } from "react-navigation";
import Foot from '../Footer/Footer'
export default class Profile extends React.Component {
  render() {
    return (
      <Container>
        <Content padder >
        <View style={styles.container}>
        <Image style={{ height: 100, width: 100,}}
              source={require('../../assets/images/robot-prod.png')}/>
          <Card style={styles.card}>
            
            
              <Icon active name="paper-plane" />
              <View>
                <Text>Info profile</Text>
              </View>
              <View>
                <Text>wilouse@hotmail.com</Text>
              </View>
              <View>
                <Text>wilstef</Text>
              </View>
              <View>
                <Text>Couillet</Text>
              </View>
              <View>
                <View>
                  <Text>Comprensif
                  </Text>
                </View>
                <View><Text>Consciencieux
                  </Text></View>
                <View>
                  <Text>Aimable
                  </Text>
                </View>
              </View>
              <View>
                <Text>26H30M</Text>
              </View>
            
          </Card></View>
        </Content>
        <Foot/>
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
        <Title>Profile</Title>
      </Body>
      <Right />
    </Header>
  )
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '95%',
    justifyContent: 'center',
    alignItems: 'center',

  },card: {
    flex: 1,
    height: '95%',
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center'

  }
})