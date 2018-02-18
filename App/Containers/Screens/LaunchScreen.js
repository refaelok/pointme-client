import React, {Component} from 'react';
import {
    View
} from 'react-native';

import LoginForm from '../LoginForm';
import Container from '../../SDK/Container';

// Styles
import styles from '../Styles/LaunchScreenStyles';

@Container({
    toolbar: {
        centerElement: 'Login'
    }
})
export default class LaunchScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LoginForm />
            </View>
        );
    }
}
