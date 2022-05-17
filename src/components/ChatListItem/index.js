import React from 'react';
import { TouchableHighlight, View, Text, Image } from 'react-native';
import { WHITE } from 'constants/colors';
import { PROFILE_ICON } from 'constants/icons';
import strings from 'localization';
import { object, func } from 'prop-types';
import styles from './styles';

const ChatListItem = ({ match, onPress }) => {
  const { matchId, user, lastMessage, topicIcon } = match;
  const uri = user?.avatar?.original_url;

  return (
    <TouchableHighlight key={`match-${matchId}`} underlayColor={WHITE} onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={
            uri
              ? {
                  uri,
                }
              : PROFILE_ICON()
          }
          style={styles.iconLeft}
        />

        <View>
          <Text style={styles.title}>
            {user?.fullName || strings.CHATS_SCREEN.notAvailableName}
          </Text>
          {!!lastMessage && <Text style={styles.subtitle}>{lastMessage}</Text>}
        </View>

        <View style={styles.containerIconRight}>
          <Image source={{ uri: topicIcon }} style={styles.iconRight} />
        </View>
      </View>
    </TouchableHighlight>
  );
};

ChatListItem.propTypes = {
  match: object.isRequired,
  onPress: func.isRequired,
};

export default ChatListItem;
