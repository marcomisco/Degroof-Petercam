import React from "react";
import { StyleSheet,AppRegistry, View, Image } from "react-native";
import { Container, Header, Left, Body, Title, Card, CardItem, Content, Right, Icon, Button, Text } from "native-base";
import { StackNavigator } from "react-navigation";
import Foot from '../Footer/Footer'
// import EditScreenTwo from "./EditScreenTwo.js";
export default class Profile extends React.Component {
  render() {
    return (
      <Container>
        <Content padder>
        <View style={styles.container}>
          <Card style={styles.card}>

            <View style={styles.aligneR}>
              <View>
                <Image image
                  style={styles.image}
                  source={require('../../assets/images/Missing1.png')}/>
              </View>
              <View style={styles.aligneV}>
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
              </View>
            </View>

            <Button full rounded primary
                style={{ marginTop: 10 }}
                onPress={() => this.props.navigation.navigate("Detail")}>
                <Text>Detail Missing</Text>
            </Button>

          </Card>
          <Card style={styles.card}>

            <View style={styles.aligneR}>
              <View>
                <Image 
                  style={styles.image}
                  source={require('../../assets/images/Missing2.png')}/>
              </View>
              <View style={styles.aligneV}>
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
              </View>
            </View>

            <Button full rounded primary
                style={{ marginTop: 10 }}
                onPress={() => this.props.navigation.navigate("Detail")}>
                <Text>Detail Missing</Text>
            </Button>

          </Card>
          <Card style={styles.card}>

            <View style={styles.aligneR}>
              <View>
                <Image 
                  style={styles.image}
                  source={require('../../assets/images/Missing3.png')}/>
              </View>
              <View style={styles.aligneV}>
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
              </View>
            </View>

            <Button full rounded primary
                style={{ marginTop: 10 }}
                onPress={() => this.props.navigation.navigate("Detail")}>
                <Text>Detail Missing</Text>
            </Button>

          </Card>
          <Card style={styles.card}>

            <View style={styles.aligneR}>
              <View>
                <Image 
                  style={styles.image}
                  source={require('../../assets/images/Missing4.png')}/>
              </View>
              <View style={styles.aligneV}>
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
              </View>
            </View>

            <Button full rounded primary
                style={{ marginTop: 10 }}
                onPress={() => this.props.navigation.navigate("Detail")}>
                <Text>Detail Missing</Text>
            </Button>

          </Card>
        </View>
          
          
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
        <Title>Liste des Missions</Title>
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

  },
  aligneR: {
    flex: 1,flexDirection:"row",
    height: '95%',
    width:'100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  aligneV: {
    flex: 1,flexDirection:"column",
    height: '95%',
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
  },image:{ height: 100, width: 100,borderRadius: 10,}
})