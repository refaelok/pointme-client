import React, {Component} from 'react';
import {Toolbar} from 'react-native-material-ui';
import Container from 'react-native-material-ui/src/Container';

/**
 * @param config
 *
 * config options:

 {
     toolbar: {Props for material ui toolbar}
 }

 *
 * @returns {function(*)}
 * @constructor
 *
 *
 */


const ContainerDecorator = (config) => (WrappedComponent) => {
    return class extends Component {
        render() {
            return (
                <Container>
                    {config.toolbar && <Toolbar {...config.toolbar} />}
                    <WrappedComponent {...this.props} />
                </Container>
            );
        }
    }
};

export default ContainerDecorator;
