import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Container from 'components/common/Container';
import strings from 'localization';
import { LOCATION_ICON, PROFILE_ICON } from 'constants/icons';
import { CHATS_SCREEN, MAIN_SCREEN, PROFILE_SCREEN } from 'constants/screens';

const ChatsScreen = () => {
  const navigation = useNavigation();

  return (
    <Container
      headerProps={{
        title: strings.CHATS_SCREEN.title,
        imageLeft: PROFILE_ICON(),
        imageRight: LOCATION_ICON(),
        onPressIconLeft: () => navigation.navigate(PROFILE_SCREEN),
        onPressIconRight: () => navigation.navigate(MAIN_SCREEN),
      }}>
      <View testID={CHATS_SCREEN}></View>
    </Container>
  );
};

export default ChatsScreen;
