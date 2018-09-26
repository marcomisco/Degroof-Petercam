import React, { Component } from "react";
import HomeScreen from "./HomePage.js";
import Missing from "../MissingPage/index.js";
import Profile from "../Profil/index.js";
import SideBar from "../SideBar/SideBar.js";
import { createDrawerNavigator } from "react-navigation";
const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: { screen: Profile },
    Missing:{ screen: Missing }
  }
  ,
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
