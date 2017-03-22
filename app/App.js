import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import SplashScreen from "./components/Splash/SplashScreen"
import LoginScreen from "./components/Login/LoginScreen"
import SignupScreen from "./components/Signup/SignupScreen"
import ListScreen from "./components/List/ListScreen"

const App = StackNavigator({
	Splash: {
		screen: SplashScreen
	},
	Login: {
		screen: LoginScreen
	},
	Signup: {
		screen: SignupScreen
	},
	List: {
		screen: ListScreen
	}
});

AppRegistry.registerComponent('ReactApp1', () => App);
