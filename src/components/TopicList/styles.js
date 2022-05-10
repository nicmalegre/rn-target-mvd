import { StyleSheet } from 'react-native';
import { BLACK, WHITE } from 'constants/colors';
import { PRIMARY_FONT_REGULAR } from 'constants/fonts';

const styles = StyleSheet.create({
  flatListContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: WHITE,
    width: '100%',
    paddingBottom: 26,
  },
  separator: {
    width: '100%',
    backgroundColor: BLACK,
    height: 0.5,
  },
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
  },
});

export default styles;
