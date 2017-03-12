import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import Component1 from "./app/components/Component1"

class ReactApp1 extends Component {
    render() {
        return (
            <View style={{
                alignItems: 'center',
                margin: 80
            }}>
                <Component1 name="name1"/>
                <Component1 name="name3"/>
                <Component1 name="name5"/>
            </View>
        )
    }
}

AppRegistry.registerComponent('ReactApp1', () => ReactApp1);
