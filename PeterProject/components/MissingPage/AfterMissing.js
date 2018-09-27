import React from "react";
import { AppRegistry, TextInput,StyleSheet,Image,View,Dimensions } from "react-native";
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button, Text } from "native-base";
import ProgressBarAnimated from 'react-native-progress-bar-animated';
export default class EditScreenOne extends React.Component {
  state = { message: ''}
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
    const barWidth = Dimensions.get('screen').width - 30;
    return (
      <Container>
        <Content padder>
        <Image 
                        style={styles.image}
                        source={require('../../assets/images/robot-prod.png')}/>
          <Card>
          <View>
                      <View>
                            <Text>Description Projet</Text>
                      </View>
                      <View>
                            <Text>nom Projet</Text>
                      </View>
                      <Content>
                      <ProgressBarAnimated
            width={barWidth}
            value={10}
            backgroundColorOnComplete="#6CC644"
          />
                      </Content>
                      <TextInput
                          style={styles.textInput}
                          autoCapitalize="none"
                          placeholder=""
                          onChangeText={message => this.setState({ message })}
                          value={this.state.message}
                        />
                </View>
                <Button style={styles.buton}
          title="Don't have an account? Sign Up"
        ><Text>Don't have an account? Sign Up</Text></Button>
          </Card>
          
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({textInput: {
  height: 40,
  width: '90%',
  borderColor: 'gray',
  borderWidth: 1,
  marginTop: 8
},
  image:{ height: 200, width: '80%',borderRadius: 30,},
  buton: {
    height: 'auto',
    width: 'auto',
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginTop: 8,
    marginHorizontal: 'auto',
  }
 })