import React, { Component } from "react";
import Profile from "./ProfilPage.js";
// import EditScreenOne from "./EditScreenOne.js";
// import EditScreenTwo from "./EditScreenTwo.js";
import { createStackNavigator } from "react-navigation";
export default (DrawNav = createStackNavigator({
  Profile: { screen: Profile }
}));
