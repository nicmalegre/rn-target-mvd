import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import { logout } from 'actions/userActions';
import { MAIN_SCREEN } from 'constants/screens';
import strings from 'localization';
import useSession from 'hooks/useSession';
import styles from './styles';

const MainScreen = () => {
  const dispatch = useDispatch();
  const logoutRequest = useCallback(() => dispatch(logout()), [dispatch]);

  const {
    user: { email },
  } = useSession();

  return (
    <View style={styles.container} testID={MAIN_SCREEN}>
      <Text>Hey{` ${email}` || ''}, you&#39;re logged in!</Text>
      <Text testID="logout-button" style={styles.logoutButton} onPress={logoutRequest}>
        {strings.MAIN_SCREEN.logout.toLocaleUpperCase()}
      </Text>
    </View>
  );
};

MainScreen.navigationOptions = {
  title: strings.MAIN_SCREEN.title,
};

export default MainScreen;
