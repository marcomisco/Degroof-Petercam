import React, { Component } from "react";
import ListMissing from "./ListMissingPage.js";
import MissingDetail from "./MissingDetail.js";
import AccetMissing from "./AccetMissing.js";
import AfterMissing from "./AfterMissing.js";
import { createStackNavigator } from "react-navigation";
export default (DrawNav = createStackNavigator({
  Missing: { screen: ListMissing },
  Detail: { screen: MissingDetail },
  Accet: { screen: AccetMissing },
  AfterM: { screen: AfterMissing }
}));
