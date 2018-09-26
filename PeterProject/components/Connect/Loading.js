import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { StackNavigator } from "react-navigation";
import  base  from '../../firebase'
export default class Loading extends React.Component {
    componentDidMount() {
      base.auth().onAuthStateChanged(user => {
          this.props.navigation.navigate(user ? 'HomeL' : 'SignUp')
        })
      }
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})