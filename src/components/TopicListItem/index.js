import React from 'react';
import { TouchableHighlight, View, Text, Image } from 'react-native';
import { WHITE } from 'constants/colors';
import { object, func } from 'prop-types';
import styles from './styles';

const TopicListItem = ({ topic, setModalVisible, onValueChange }) => (
  <TouchableHighlight
    key={`topic-${topic.id}`}
    underlayColor={WHITE}
    onPress={() => {
      onValueChange(topic);
      setModalVisible(false);
    }}>
    <View style={styles.topicContainer}>
      <Image style={styles.image} source={{ uri: topic.icon }} />
      <Text style={styles.text}>{topic.label}</Text>
    </View>
  </TouchableHighlight>
);

TopicListItem.propTypes = {
  topic: object.isRequired,
  setModalVisible: func.isRequired,
  onValueChange: func.isRequired,
};

export default TopicListItem;
