import React, { Component } from "react";
import Expo from "expo";
import  base  from './firebase'
import LoginScreen from './components/indexL.js';
import HomeScreen from "./components/index.js";
export default class App extends Component {
  constructor() {
    super(); this.unsubscriber = null;
    this.state = {
      user: null,
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });    if (this.unsubscriber) {
      this.unsubscriber();
    }
    this.setState({ isReady: true });
  }
  componentDidMount() {
    this.unsubscriber = base.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    if (!this.state.user) {
      return <LoginScreen />;
    }else{
      return <HomeScreen />;
    }
  }
}