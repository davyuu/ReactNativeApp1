import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import SplashScreen from "./components/Splash/SplashScreen"
import LoginScreen from "./components/Login/LoginScreen"

const App = StackNavigator({
	Splash: {
		screen: SplashScreen
	},
	Login: {
		screen: LoginScreen
	}
});

AppRegistry.registerComponent('ReactApp1', () => App);
