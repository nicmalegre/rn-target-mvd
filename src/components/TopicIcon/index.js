import React from 'react';
import { View, Image } from 'react-native';
import { string } from 'prop-types';
import styles from './styles';

const TopicIcon = ({ uri }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.image} />
    </View>
  );
};

TopicIcon.propTypes = {
  uri: string.isRequired,
};

export default TopicIcon;
