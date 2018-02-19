import React, { Component } from 'react';
import {
    View,
    ScrollView
} from 'react-native';

import {
    Input,
    PrimaryButton,
    IconButton,
    Text1
} from '../Components/Common';

// Styles
import styles from './Styles/LoginFormStyles';

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.logo} />
                    <View style={styles.loginForm}>
                        <Input placeholder="Email" />
                        <Input placeholder="Password" secureTextEntry />

                        <PrimaryButton text="Log In" />

                        <Text1 text="OR" />

                        <IconButton
                            text="Sign in with Facebook"
                            icon="facebook-f"
                            style={{ container: { backgroundColor: '#3b5998' } }}
                        />
                        <IconButton
                            text="Sign in with Google"
                            icon="google"
                            style={{ container: { backgroundColor: '#dc4e41' } }}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
