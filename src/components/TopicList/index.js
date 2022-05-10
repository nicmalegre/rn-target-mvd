import React from 'react';
import { FlatList, TouchableHighlight, View, Text, Image } from 'react-native';
import { WHITE } from 'constants/colors';
import { func } from 'prop-types';
import styles from './styles';

const MOCK_DATA = [
  {
    id: 11,
    label: 'Chess',
    icon:
      'https://target-mvd.s3.amazonaws.com/topic/icon/11/6cacfa25-f06b-45e5-99d9-390dcb8c8797.jpg',
  },
  {
    id: 12,
    label: 'Mate',
    icon:
      'https://target-mvd.s3.amazonaws.com/topic/icon/12/0a6e8b6e-a397-4612-b6f3-39735123c85a.jpg',
  },
  {
    id: 2,
    label: 'Football',
    icon:
      'https://target-mvd.s3.amazonaws.com/topic/icon/2/ba73d061-ddbf-4863-8edf-f93c621a6e19.jpg',
  },
  {
    id: 13,
    label: 'Politics',
    icon:
      'https://target-mvd.s3.amazonaws.com/topic/icon/13/6d81b324-b73a-4dc7-b841-c61ba00e035a.jpg',
  },
  {
    id: 14,
    label: 'Art',
    icon:
      'https://target-mvd.s3.amazonaws.com/topic/icon/14/89b42cc1-ba06-4fff-b657-d0fcbcf4b799.jpg',
  },
  {
    id: 15,
    label: 'Dating',
    icon:
      'https://target-mvd.s3.amazonaws.com/topic/icon/15/c1bfe7d0-855a-4d7d-be89-8a339340734f.jpg',
  },
  {
    id: 16,
    label: 'Music',
    icon:
      'https://target-mvd.s3.amazonaws.com/topic/icon/16/fc340e5d-5569-443e-9e71-8696a879d6d0.jpg',
  },
  {
    id: 17,
    label: 'Movies',
    icon:
      'https://target-mvd.s3.amazonaws.com/topic/icon/17/dfb2b82b-f1d9-4bdb-90a0-5eef254e25d7.jpg',
  },
  {
    id: 19,
    label: 'Food',
    icon:
      'https://target-mvd.s3.amazonaws.com/topic/icon/19/a3a2a60e-a724-4ff5-b07f-125b8797e5fb.jpg',
  },
];

const TopicList = ({ setModalVisible, onValueChange }) => {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={[styles.separator]} />}
      data={MOCK_DATA}
      style={styles.flatListContainer}
      renderItem={({ item }) => (
        <TouchableHighlight
          key={`topic-${item.id}`}
          underlayColor={WHITE}
          onPress={() => {
            onValueChange(item);
            setModalVisible(false);
          }}>
          <View style={styles.topicContainer}>
            <Image style={styles.image} source={{ uri: item.icon }} />
            <Text style={styles.text}>{item.label}</Text>
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
