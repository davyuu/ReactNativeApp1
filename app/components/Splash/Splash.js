import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Splash extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Hello World!</Text>
                </View>
				<Text style={styles.subtitle}>Powered by React Native</Text>
            </View>
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
