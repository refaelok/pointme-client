import {StyleSheet} from 'react-native';
import Colors from '../../Themes/Colors';

const styles = StyleSheet.create({
    applicationView: {
        flex: 1
    }
});

const uiTheme = {
    palette: {
        primaryColor: Colors.uiTheme.palette.primaryColor,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

export default {...styles, uiTheme}
