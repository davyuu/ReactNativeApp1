import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';

export default class SplashScreen extends Component {
	static navigationOptions = {
		title: 'SPLASH'
	};
	render() {
		const {navigate} = this.props.navigation;
		return (
			<TouchableWithoutFeedback onPress={() => navigate('Login')}>
				<View style={styles.wrapper}>
					<View style={styles.titleWrapper}>
						<Text style={styles.title}>SPLASH SCREEN!</Text>
					</View>
					<Text style={styles.subtitle}>Powered by React Native</Text>
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: '#3498db',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	titleWrapper: {
		flex: 1,
		justifyContent: 'center'
	},
	title: {
		color: 'white',
		fontSize: 35,
		fontWeight: 'bold'
	},
	subtitle: {
		color: 'white',
		fontWeight: '200'
	}
});
