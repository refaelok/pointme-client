import {StyleSheet} from 'react-native';
import {COLOR} from 'react-native-material-ui';

const styles = StyleSheet.create({
    applicationView: {
        flex: 1,
        backgroundColor: '#fff',
    }
});

const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

export default {...styles, uiTheme}
