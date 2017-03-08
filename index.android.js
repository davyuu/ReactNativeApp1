import React, {
    Component
} from 'react';
import {
    AppRegistry,
    Text
} from 'react-native';

class ReactApp1 extends Component {
    render() {
        return (
            <Text>Hello World!</Text>
        )
    }
}

AppRegistry.registerComponent('ReactApp1', () => ReactApp1);
