import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import {ThemeProvider } from 'react-native-material-ui';
import ReduxNavigation from '../Navigation/ReduxNavigation';
import {connect} from 'react-redux';
import StartupActions from '../Redux/StartupRedux';

// Styles
import styles from './Styles/RootContainerStyles';

class RootContainer extends Component {
    componentDidMount() {
        this.props.startup();
    }

    render() {
        return (
            <ThemeProvider uiTheme={styles.uiTheme}>
                <View style={styles.applicationView}>
                    <StatusBar barStyle='light-content' />
                    <ReduxNavigation />
                </View>
            </ThemeProvider>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startup: () => dispatch(StartupActions.startup()),
});

export default connect(null, mapDispatchToProps)(RootContainer);
