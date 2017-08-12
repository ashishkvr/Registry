import React, { Component } from 'react';
import { AppRegistry} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Registration from './containers/pages/registration/registration'
import Details from './containers/pages/details/details'

const App = StackNavigator({
	register: {screen: Registration},
	details: {screen: Details},
});

AppRegistry.registerComponent('Registry', () => App);