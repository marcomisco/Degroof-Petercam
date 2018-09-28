import React from "react";
import { AppRegistry, Alert,StyleSheet,Image,View } from "react-native";
import Foot from '../Footer/Footer'
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button, Text } from "native-base";
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
          <Title>Accept Missing</Title>
        </Body>
        <Right />
      </Header>
    )
  });
  render() {
    return (
      <Container>
        <Content padder>
        <Image 
                        style={styles.image}
                        source={require('../../assets/images/Missing1.png')}/>
          <Card>
          <View>
                      <View>
                            <Text>Description Projet</Text>
                      </View>
                      <View>
                            <Text>nom Projet</Text>
                      </View>
                      <View>
                            <Text>région Projet</Text>
                      </View>
                      <View>
                            <Text>Date de Mission</Text>
                      </View>
                      <View>
                            <View>
                                  <Text>Comprensif</Text>
                            </View>
                            <View>
                                  <Text>Consciencieux</Text>
                            </View>
                            <View>
                                  <Text>Aimable</Text>
                            </View>
                      </View>
                      <View>
                            <Text>Adresse :</Text>
                      </View>
                      <View style={styles.aligneR}> 
                            <View>
                                  <Text>Adresse</Text>
                            </View>
                            <View>
                            <Image 
                        style={styles.image2}
                        source={require('../../assets/images/map.png')}/>
                            </View>
                      </View>
                      <View>
                            <Text>6H</Text>
                      </View>
                </View>
                <View>
                      <Text>Drecription de la mission</Text>
                </View>
                <View>
                      <Text>6Hqfefhuc dhf gifeq gd bezfhvu ezf gv fekj ds bsdifq gufea uiaezf hrf orh iurei vrbiuvrbvrui vr  br gvriurvbirevcb jv irebkc brk vrvr kvr rvhbre jcrjbrvkvbb vrbkjesvbvsbrsdkjc  bcdbuedk</Text>
                </View>
          </Card>
          <Button full rounded primary
                  style={{ marginTop: 10 }}
                  onPress={() => this.props.navigation.navigate("AfterM")}>
                  <Text>Après Missing</Text>
                </Button>
        </Content>
        <Foot/>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  image:{ height: 200, width: '80%',borderRadius: 30,},
  image2:{ height: 80, width: 140,borderRadius: 30,},
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
  }
 })
