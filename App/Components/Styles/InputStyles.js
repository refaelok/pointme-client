import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../Themes';

export default StyleSheet.create({
    input:{
        width: '100%',
        height: Metrics.buttonHeight,
        backgroundColor: Colors.Input.Background,
        marginBottom: Metrics.baseMargin,
        fontSize: Fonts.size.input,
        color: Colors.Input.Text,
        paddingLeft: 10
    }
});
