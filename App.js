import React, { Component } from 'react';
import { Platform,StyleSheet,Text,View,YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import store from './store/index';
import Homescreen from './screens/Homescreen'
import Listscreen from './screens/ListScreen'
import Mapscreen from './screens/Mapscreen'
YellowBox.ignoreWarnings(
  ['Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
  'Possible Unhandled Promise Rejection',
  'Warning: Failed prop type',
  'source.uri should not be an empty string',
  'Warning: Cannot update during an existing state transition',
  "Warning: Can't call setState (or forceUpdate) on an unmounted component"]);
const RootStack = createStackNavigator({
  Home: {
    screen: Homescreen,
  },
  List: {
    screen: Listscreen,
  },
  Maps: {
    screen: Mapscreen,
  }
},{
  initialRouteName: "Home"
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store } >
        <RootStack />
      </Provider>
    )
  }
}
