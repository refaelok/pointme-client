import React, {Component} from 'react';
import {Toolbar} from 'react-native-material-ui';
import {
    View,
    ImageBackground
} from 'react-native';

import LoginForm from '../LoginForm';

// Styles
import styles from '../Styles/LaunchScreenStyles';

export default class LaunchScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LoginForm />
            </View>
        );
    }
}
