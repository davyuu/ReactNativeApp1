import React, {Component} from 'react';
import {Text} from 'react-native';

export default class Component1 extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        )
    }
}
