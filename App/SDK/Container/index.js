import React, {Component} from 'react';
import {Toolbar} from 'react-native-material-ui';
import Container from 'react-native-material-ui/src/Container';

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
