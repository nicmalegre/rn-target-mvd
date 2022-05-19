import React from 'react';
import { View, Image } from 'react-native';
import { string, bool } from 'prop-types';
import styles from './styles';

const TopicIcon = ({ uri, isSelected }) => {
  return (
    <View style={[styles.container, isSelected && styles.selected]}>
      <Image source={{ uri }} style={styles.image} />
    </View>
  );
};

TopicIcon.propTypes = {
  uri: string.isRequired,
  isSelected: bool,
};

export default TopicIcon;
