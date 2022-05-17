import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import useConversations from 'hooks/useConversations';
import Container from 'components/common/Container';
import ChatListItem from 'components/ChatListItem';
import { getConversations } from 'actions/conversationActions';
import strings from 'localization';
import { LOCATION_ICON, PROFILE_ICON } from 'constants/icons';
import { CHATS_SCREEN, MAIN_SCREEN, PROFILE_SCREEN } from 'constants/screens';
import styles from './styles';

const ChatsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { matches } = useConversations();

  useEffect(() => {
    dispatch(getConversations());
  }, []);

  return (
    <Container
      headerProps={{
        title: strings.CHATS_SCREEN.title,
        imageLeft: PROFILE_ICON(),
        imageRight: LOCATION_ICON(),
        onPressIconLeft: () => navigation.navigate(PROFILE_SCREEN),
        onPressIconRight: () => navigation.navigate(MAIN_SCREEN),
      }}>
      <View testID={CHATS_SCREEN}>
        <FlatList
          data={matches}
          contentContainerStyle={styles.flatListContainer}
          // TO DO: Add function to open chat onPress
          renderItem={({ item: match }) => <ChatListItem match={match} onPress={() => {}} />}
        />
      </View>
    </Container>
  );
};

export default ChatsScreen;
