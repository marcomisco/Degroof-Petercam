import React from "react";
import { AppRegistry, Alert,Image,StyleSheet,View } from "react-native";
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
  import Foot from '../Footer/Footer'
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
            <View>
                <Image
                        style={styles.image}
                        source={require('../../assets/images/Missing1.png')}/>
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
                            <Text>6H</Text>
                      </View>
                </View>
                <View>
                      <Text>Drecription de la mission</Text>
                </View>
                <View>
                      <Text>6Hqfefhuc dhf gifeq gd bezfhvu ezf gv fekj ds bsdifq gufea uiaezf hrf orh iurei vrbiuvrbvrui vr  br gvriurvbirevcb jv irebkc brk vrvr kvr rvhbre jcrjbrvkvbb vrbkjesvbvsbrsdkjc  bcdbuedk</Text>
                </View>
                <Button full rounded primary
                  style={{ marginTop: 10 }}
                  onPress={() => this.props.navigation.navigate("Accet")}>
                  <Text>Accept Missing</Text>
                </Button>
          </View>
        </Content>
        <Foot/>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
 image:{ height: 200, width: '80%',borderRadius: 30,}
})