import React, {Component} from 'react';
import {
    TextInput
} from 'react-native';

// styles
import styles from '../Styles/InputStyles';
import Colors from '../../Themes/Colors';

export default class Input extends Component {
    render() {
        return (
                <TextInput
                    style={styles.input}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={Colors.Input.Placeholder}
                    underlineColorAndroid={Colors.transparent}
                    secureTextEntry={this.props.secureTextEntry}
                />
        );
    }
}
