import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Button
} from 'react-native-material-ui';

// styles
import styles from '../Styles/PrimaryButtonStyles';

const propTypes = {
    text: PropTypes.string.isRequired,
    additionalProps: PropTypes.object
};

const defaultProps = {
    additionalProps: {}
};

class PrimaryButton extends Component {
    render() {
        return (
            <Button
                style={{container: styles.submitButton, text: styles.submitButtonText}}
                text={this.props.text}
                upperCase={false}
                raised
                primary
                {...this.props.additionalProps}
            />
        );
    }
}
PrimaryButton.propTypes = propTypes;
PrimaryButton.defaultProps = defaultProps;

export default PrimaryButton;
