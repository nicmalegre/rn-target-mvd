import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getTopics } from 'actions/topicActions';
import TopicListItem from 'components/TopicListItem';
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
        <TopicListItem
          topic={topic}
          setModalVisible={setModalVisible}
          onValueChange={onValueChange}
        />
      )}
    />
  );
};

TopicList.propTypes = {
  setModalVisible: func.isRequired,
  onValueChange: func.isRequired,
};

export default TopicList;
