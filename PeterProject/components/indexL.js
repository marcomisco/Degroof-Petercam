// import React, { Component } from "react";
// import SignUp from "./SignUp.js";
// import Login from "./Login.js";
// import Loading from "./Loading.js";
// import Home from "./HomeScreen/index.js";
// import { createStackNavigator } from "react-navigation";
// export default (DrawNav = createStackNavigator({
//   Login: { screen: Login },
//   SignUp: { screen: SignUp },
//   Loading: { screen: Loading} ,
//   Home: { screen: Home }
// }));
import React, { Component } from "react";
import Connect from "./Connect/index.js";

import Home from "./HomeScreen/HomePage.js";
import Missing from "./MissingPage/index.js";
import Profile from "./Profil/index.js";
import SideBar from "./SideBar/SideBar.js";
import { createDrawerNavigator } from "react-navigation";
const HomeScreenRouter = createDrawerNavigator(
  {
    Connect: { screen: Connect },
    Home: { screen: Home },
    Profile: { screen: Profile },
    Missing:{ screen: Missing }
  }
  ,
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;