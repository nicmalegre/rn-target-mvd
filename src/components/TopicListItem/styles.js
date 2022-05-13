import { StyleSheet } from 'react-native';
import { PRIMARY_FONT_REGULAR } from 'constants/fonts';
import { BLACK } from 'constants/colors';

const styles = StyleSheet.create({
  topicContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 17,
    paddingVertical: 12,
  },
  image: {
    width: 25,
    height: 25,
  },
  text: {
    fontFamily: PRIMARY_FONT_REGULAR,
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 1.95,
    paddingLeft: 9,
    color: BLACK,
  },
});

export default styles;
