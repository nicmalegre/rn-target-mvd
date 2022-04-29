import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { logout } from 'actions/userActions';
import strings from 'localization';
import useSession from 'hooks/useSession';
import Container from 'components/common/Container';
import { PROFILE_ICON } from 'constants/icons';
import { MAIN_SCREEN } from 'constants/screens';
import styles from './styles';

const MainScreen = () => {
  const dispatch = useDispatch();
  const logoutRequest = useCallback(() => dispatch(logout()), [dispatch]);

  const {
    user: { email },
  } = useSession();

  return (
    <Container
      headerProps={{
        title: strings.MAIN_SCREEN.title,
        imageLeft: PROFILE_ICON(),
        // TODO: Add correct function to show profile (left) and open chat (right)
        onPressIconLeft: () => {},
        onPressIconRight: () => {},
      }}>
      <View style={styles.container} testID={MAIN_SCREEN}>
        <Text>Hey{` ${email}` || ''}, you&#39;re logged in!</Text>
        <TouchableOpacity testID="logout-button" onPress={logoutRequest}>
          <Text style={styles.logoutButton}>{strings.MAIN_SCREEN.logout}</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

MainScreen.navigationOptions = {
  title: strings.MAIN_SCREEN.title,
};

export default MainScreen;
