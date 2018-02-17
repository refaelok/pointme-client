import React, {Component} from 'react';
import {Toolbar} from 'react-native-material-ui';
import {
    View
} from 'react-native';

// Styles
import styles from '../Styles/LaunchScreenStyles';

export default class LaunchScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigation.goBack()}
                    centerElement="Title"
                />
            </View>
        );
    }
}
