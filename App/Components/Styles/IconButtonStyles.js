import {StyleSheet} from 'react-native';
import {Fonts, Metrics} from '../../Themes';

export default {
    iconButton: {
        width: '100%',
        height: Metrics.buttonHeight,
        margin: Metrics.smallMargin,
        justifyContent: 'flex-start'
    },
    iconButtonText: {
        ...Fonts.style.normal,
        flex: 9,
        marginLeft: Metrics.doubleBaseMargin
    }
};
