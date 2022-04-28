import { WHITE } from 'constants/colors';
import { CHAT_ICON, BACK_ARROW_ICON } from 'constants/icons';
import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './styles';

const Header = ({
  testID,
  title,
  imageLeft = BACK_ARROW_ICON(),
  onPressIconLeft,
  imageRight = CHAT_ICON(),
  onPressIconRight,
}) => {
  return (
    <View style={[styles.header]} testID={testID}>
      {onPressIconLeft && (
        <TouchableHighlight
          testID="icon-left-header"
          onPress={onPressIconLeft}
          underlayColor={WHITE}
          style={styles.containerIconLeft}>
          <View style={styles.icon}>
            <Image source={imageLeft} />
          </View>
        </TouchableHighlight>
      )}

      <Text style={styles.title}>{title}</Text>

      {onPressIconRight && (
        <TouchableHighlight
          testID="icon-right-header"
          onPress={onPressIconRight}
          underlayColor={WHITE}
          style={styles.containerIconRight}>
          <View style={styles.icon}>
            <Image source={imageRight} />
          </View>
        </TouchableHighlight>
      )}
    </View>
  );
};

export default Header;
