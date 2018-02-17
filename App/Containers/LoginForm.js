import React, {Component} from 'react';
import {
    View,
    TextInput
} from 'react-native';
import {
    Button
} from 'react-native-material-ui';

import {Input} from '../Components/Common';

// Styles
import styles from './Styles/LoginFormStyles';

export default class LoginForm extends Component {
    render() {
        return (
            <View style={{flexShrink: 1, padding: 20, backgroundColor: '#212f3f', alignItems: 'center', justifyContent: 'center'}}>
                <Input placeholder="Email" />
                <Input placeholder="Password" secureTextEntry />

                <Button
                    style={{container: {width: '100%', paddingVertical: 20}}}
                    text="Primary"
                    raised
                    primary

                />
            </View>
        );
    }
}
