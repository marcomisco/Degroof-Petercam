import React, { Component } from "react";
import Loading from "./Loading.js";
import Login from "./Login.js";
import SignUp from "./SignUp.js";
import HomeL from "../HomeScreen/HomePage.js";
import { createStackNavigator } from "react-navigation";
export default (DrawNav = createStackNavigator({
  Login: { screen: Login ,
    navigationOptions: {
     header: null
    }},
  Loading: { screen: Loading ,
    navigationOptions: {
     header: null
    }},
  SignUp: { screen: SignUp ,
    navigationOptions: {
     header: null
    }},
  HomeL: { screen: HomeL ,
    navigationOptions: {
     header: null
    }}
}));
