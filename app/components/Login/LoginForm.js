import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
					placeholder="username or email"
					style={styles.input}/>
                <TextInput
					placeholder="password"
					style={styles.input}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
		padding: 20
	},
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
		marginBottom: 20,
		color: '#FFF',
		paddingHorizontal: 10
    }
});
