import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class Hello extends React.Component {
  render() {
    return (
        <Header style={styles.green}>
            <Left>
                <Button transparent onPress={() => navigation.openDrawer()}>
                <Icon name="menu" />
                </Button>
            </Left>
            <Body>
                <Title>Missing</Title>
            </Body>
            <Right />
        
        </Header> 
    );
  }
}
const styles = StyleSheet.create({
    blue:{color:'blue'},
    green:{color:'green'},
    red:{color:'red'}
  });