import React, {Component} from 'react';
import {Toolbar} from 'react-native-material-ui';
import {
    View
} from 'react-native';

import LoginForm from '../LoginForm';

// Styles
import styles from '../Styles/LaunchScreenStyles';

export default class LaunchScreen extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#212f3f'
            }}>
                <Toolbar centerElement="Login" />
                <View style={{flexGrow: 1}} />
                <LoginForm />
            </View>
        );
    }
}
