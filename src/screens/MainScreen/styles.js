import { PRIMARY_FONT_SEMI_BOLD } from 'constants/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logoutButton: {
    fontFamily: PRIMARY_FONT_SEMI_BOLD,
    fontSize: 14,
    letterSpacing: 1.65,
    textAlign: 'center',
    marginTop: 20,
    textTransform: 'uppercase',
  },
});

export default styles;
