import React, {Component} from 'react';
import {Text} from 'react-native';

class Component1 extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        )
    }
}

module.exports = Component1;
