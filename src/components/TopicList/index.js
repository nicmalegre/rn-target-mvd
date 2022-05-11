import React, { useEffect } from 'react';
import { FlatList, TouchableHighlight, View, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getTopics } from 'actions/topicActions';
import { WHITE } from 'constants/colors';
import { func } from 'prop-types';
import styles from './styles';

const TopicList = ({ setModalVisible, onValueChange }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopics());
  }, []);

  const { topics } = useSelector(({ topics }) => ({
    topics: topics?.topics?.topics ?? [],
  }));

  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={[styles.separator]} />}
      data={topics}
      style={styles.flatListContainer}
      renderItem={({ item: { topic } }) => (
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
      )}
    />
  );
};

TopicList.propTypes = {
  setModalVisible: func,
  onValueChange: func,
};

export default TopicList;
