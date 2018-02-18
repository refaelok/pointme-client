import {StyleSheet} from 'react-native';
import {Fonts, Metrics} from '../../Themes';

export default StyleSheet.create({
    submitButton: {
        width: '100%',
        height: Metrics.buttonHeight,
        margin: Metrics.smallMargin
    },
    submitButtonText: {
        ...Fonts.style.normal
    }
});
