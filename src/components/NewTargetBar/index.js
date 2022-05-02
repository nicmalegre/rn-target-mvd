import React from 'react';
import { TouchableHighlight, View, Image, Text } from 'react-native';
import { WHITE } from 'constants/colors';
import { TARGET_ICON } from 'constants/icons';
import { string, func } from 'prop-types';
import styles from './styles';

const NewTargetBar = ({ title, onPress, ...props }) => (
  <View style={styles.container}>
    <TouchableHighlight
      testID="new-target-button"
      underlayColor={WHITE}
      onPress={onPress}
      {...props}>
      <View style={styles.buttonContainer}>
        <Image source={TARGET_ICON()} style={styles.image} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableHighlight>
  </View>
);
NewTargetBar.propTypes = {
  title: string.isRequired,
  onPress: func.isRequired,
};

export default NewTargetBar;
