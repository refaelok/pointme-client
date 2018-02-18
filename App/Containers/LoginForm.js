import React, { Component } from 'react';
import {
    View,
    ScrollView
} from 'react-native';

import {
    Input,
    PrimaryButton,
    Text1
} from '../Components/Common';

// Styles
import styles from './Styles/LoginFormStyles';

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{flexGrow: 1}}>
                    <View style={styles.logo} />
                    <View style={styles.loginForm}>
                        <Input placeholder="Email" />
                        <Input placeholder="Password" secureTextEntry />

                        <PrimaryButton text="Log In" />

                        <Text1 text="OR" />

                        <PrimaryButton text="Sign in with Facebook" />
                        <PrimaryButton text="Sign in with Google" />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
