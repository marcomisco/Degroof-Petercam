import React from "react";
import { View } from "react-native";
import { AppRegistry, Image, ImageBackground,StatusBar } from "react-native";
import { Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
 } from "native-base";
const routes = ["Home", "Profile", "Missing"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
        <ImageBackground source={require('../../assets/images/drawer-cover.png')} style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}>
            <Image
              square
              style={{ height: 80, width: 70 }}
              source={require('../../assets/images/logo.png')}
            />
            </ImageBackground>
            <View><List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          /></View>
        </Content>
      </Container>
    );
  }
}
