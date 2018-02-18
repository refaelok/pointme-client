import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Text
} from 'react-native';

// styles
import styles from '../Styles/TextStyles';

const propTypes = {
    text: PropTypes.string.isRequired
};

class Text1 extends Component {
    render() {
        return (
            <Text style={styles.text1}>{this.props.text}</Text>
        );
    }
}
Text1.propTypes = propTypes;

export default Text1;
