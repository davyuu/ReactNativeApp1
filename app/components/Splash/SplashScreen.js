import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

export default class SplashScreen extends Component {
	static navigationOptions = {
		title: 'SPLASH'
	};
	render() {
		const {navigate} = this.props.navigation;
		return (
			<View style={styles.wrapper}>
				<View style={styles.logoContainer}>
					<Image style={styles.logo} source={require('../../images/snapchat.png')}/>
					<Text style={styles.title}>An app made for github using React Native</Text>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity onPress={() => navigate('Login')} style={styles.button}>
						<Text style={styles.buttonText}>LOGIN</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigate('List')} style={styles.button}>
						<Text style={styles.buttonText}>SIGN UP</Text>
					</TouchableOpacity>
				</View>
				<Text style={styles.subtitle}>Powered by React Native</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: '#3498db',
		flex: 1
	},
	logoContainer: {
		flexGrow: 1,
		alignItems: 'center',
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
	buttonContainer: {
		padding: 20
	},
	button: {
		backgroundColor: '#2980b9',
		paddingVertical: 15,
		marginVertical: 5
	},
	buttonText: {
		color: '#FFF',
		fontWeight: '700',
		textAlign: 'center'
	},
	subtitle: {
		color: '#FFF',
		fontWeight: '200',
		textAlign: 'center'
	}
});
