import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

function getMoviesFromApiAsync() {
	return fetch('https://davyuu-nodejs-leagueitems.herokuapp.com/items').then((response) => response.json()).then((responseJson) => {
		console.log("DAVID: " + JSON.stringify(responseJson));
		return responseJson;
	}).catch((error) => {
		console.error(error);
	});
}

export default class ListScreen extends Component {
	static navigationOptions = {
		title: 'LISTSCREEN'
	};
	constructor(props) {
		super(props);
		getMoviesFromApiAsync();
	}
	render() {
		return (
			<View>
				<Text>An app made for github using React Native</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({container: {}});
