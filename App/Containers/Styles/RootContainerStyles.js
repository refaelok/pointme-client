import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes';

const styles = StyleSheet.create({
    applicationView: {
        flex: 1,
    },
});

const uiTheme = {
    palette: {
        primaryColor: Colors.uiTheme.palette.primaryColor,
    },
    toolbar: {
        container: {
            height: Metrics.navBarHeight,
        },
    },
};

export default { ...styles, uiTheme };
