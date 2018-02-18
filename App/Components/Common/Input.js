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
    secureTextEntry: PropTypes.bool
};

const defaultProps = {
    placeholder: '',
    secureTextEntry: false
};

class Input extends Component {
    render() {
        return (
                <TextInput
                    style={styles.input}
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
