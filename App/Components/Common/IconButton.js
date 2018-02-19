import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import {
    Button
} from 'react-native-material-ui';

import Icon from 'react-native-vector-icons/FontAwesome';

// styles
import styles from '../Styles/IconButtonStyles';

const propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconColor: PropTypes.string,
    additionalProps: PropTypes.object,
    style: PropTypes.object
};

const defaultProps = {
    additionalProps: {},
    iconColor: 'white',
    style: {
        text: {}
    }
};

class IconButton extends Component {
    render() {
        return (

            <Button
                style={{
                    container: R.merge(styles.iconButton, this.props.style.container),
                    text: R.merge(styles.iconButtonText, this.props.style.text)
                }}
                text={this.props.text}
                icon={
                    <Icon
                        name={this.props.icon}
                        size={30}
                        color={this.props.iconColor}
                        style={{ flex: 1 }}
                    />
                }
                upperCase={false}
                raised
                primary
                {...this.props.additionalProps}
            />
        );
    }
}
IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;

export default IconButton;
