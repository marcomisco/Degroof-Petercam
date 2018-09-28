import React from 'react'
import { StyleSheet,TextInput, View, Image} from 'react-native'
import {   Button, Text } from "native-base";
import firebase from 'firebase';
import { StackNavigator } from "react-navigation";
import  base  from '../../firebase'
export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  handleLogin = () => {
    const { email, password } = this.state
    base
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Loading'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
  createLogin = () =>{this.props.navigation.navigate('SignUp' )}
  render() {
    return (
      <View style={styles.container}>
      <Image
              square
              style={{ height: 120, width: 210,}}
              source={require('../../assets/images/LogoDP2.png')}
            />
        <Text>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
<View>
        <Button style={styles.buton} title="Login" onPress={this.handleLogin}><Text>Login</Text></Button></View><View>
        <Button style={styles.buton}
          title="Don't have an account? Sign Up"
          onPress={this.createLogin}
        ><Text>Don't have an account? Sign Up</Text></Button></View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  },
  buton: {
    height: 'auto',
    width: 'auto',
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginTop: 8,
    marginHorizontal: 'auto',
  }
})