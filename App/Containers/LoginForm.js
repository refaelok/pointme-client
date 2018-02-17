import React, {Component} from 'react';
import {
    View
} from 'react-native';
import {
    Button
} from 'react-native-material-ui';

import {
    Input
} from '../Components/Common';

// Styles
import styles from './Styles/LoginFormStyles';

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo} />
                <View style={styles.loginForm}>
                    <Input placeholder="Email" />
                    <Input placeholder="Password" secureTextEntry />

                    <Button
                        style={styles.submitButton}
                        text="Login"
                        raised
                        primary
                    />
                </View>
            </View>

        );
    }
}
