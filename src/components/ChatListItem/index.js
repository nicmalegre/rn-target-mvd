import React from 'react';
import { TouchableHighlight, View, Text, Image } from 'react-native';
import { WHITE } from 'constants/colors';
import { PROFILE_ICON } from 'constants/icons';
import strings from 'localization';
import { object, func } from 'prop-types';
import styles from './styles';

const ChatListItem = ({ match, onPress }) => {
  /* eslint-disable camelcase */
  const { match_id, user, last_message, topic_icon } = match;
  const uri = user?.avatar?.original_url;

  return (
    <TouchableHighlight key={`match-${match_id}`} underlayColor={WHITE} onPress={onPress}>
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
            {user?.full_name || strings.CHATS_SCREEN.notAvailableName}
          </Text>
          {!!last_message && <Text style={styles.subtitle}>{last_message}</Text>}
        </View>

        <View style={styles.containerIconRight}>
          <Image source={{ uri: topic_icon }} style={styles.iconRight} />
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
