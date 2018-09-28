import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Footer } from 'native-base';
export default class Hello extends React.Component {
  render() {
    return (
        <Footer style={styles.Footer}>
            
        <View><Text>{"\u00A9"} Degroof Petercam </Text></View>
        <View><Text>Fait par Mery, Stéphane, Marco, Liam et Guillaume</Text></View>
        <View><Text>à BeCode</Text></View>
        </Footer> 
    );
  }
}
const styles = StyleSheet.create({
    Footer:{flexDirection:"column",
    height: 60,
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
        backgroundColor:'#4FBC83'}
  });