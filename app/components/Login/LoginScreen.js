import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm';

export default class LoginScreen extends Component {
	static navigationOptions = {
		title: 'LOGIN'
	};
	render() {
		return (
			<KeyboardAvoidingView behaviour="padding" style={styles.container}>
				<View style={styles.logoContainer}>
					<Image style={styles.logo} source={require('../../images/snapchat.png')}/>
					<Text style={styles.title}>An app made for github using React Native</Text>
				</View>
				<View style={styles.formContainer}>
					<LoginForm/>
				</View>
			</KeyboardAvoidingView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#3498db'
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	logo: {
		width: 100,
		height: 100
	},
	title: {
		color: '#FFF',
		marginTop: 10,
		width: 160,
		textAlign: 'center',
		opacity: 0.9
	},
	formContainer: {}
});
