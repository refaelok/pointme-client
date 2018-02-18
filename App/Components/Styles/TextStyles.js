import {StyleSheet} from 'react-native';
import {Fonts, Metrics} from '../../Themes';

export default StyleSheet.create({
    text1: {
        ...Fonts.style.normal,
        margin: Metrics.smallMargin,
        color: 'white',
        fontWeight: 'bold'
    },
});
