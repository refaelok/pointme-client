import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    TextInput
} from 'react-native';

// styles
import styles from '../Styles/InputStyles';
import Colors from '../../Themes/Colors';

const propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChangeText: PropTypes.func,
    secureTextEntry: PropTypes.bool
};

const defaultProps = {
    value: null,
    onChangeText: null,
    placeholder: '',
    secureTextEntry: false
};

class Input extends Component {
    render() {
        return (
                <TextInput
                    style={styles.input}
                    onChangeText={this.props.onChangeText}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    placeholderTextColor={Colors.Input.Placeholder}
                    underlineColorAndroid={Colors.transparent}
                />
        );
    }
}
Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
