import React, { Component } from 'react';
import { AppRegistry} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Registration from './containers/pages/registration/registration'

const App = StackNavigator({
	register: {screen: Registration},
});

AppRegistry.registerComponent('Registry', () => App);