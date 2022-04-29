import { WHITE } from 'constants/colors';
import { CHAT_ICON, BACK_ARROW_ICON } from 'constants/icons';
import { func, object, number, string } from 'prop-types';

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
  stylesHeader,
  stylesTitle,
}) => (
  <View style={[styles.header, stylesHeader]} testID={testID}>
    {onPressIconLeft && (
      <TouchableHighlight
        testID="icon-left-header"
        onPress={onPressIconLeft}
        underlayColor={WHITE}
        style={styles.containerIconLeft}>
        <View>
          <Image source={imageLeft} />
        </View>
      </TouchableHighlight>
    )}

    <Text style={[styles.title, stylesTitle]}>{title}</Text>

    {onPressIconRight && (
      <TouchableHighlight
        testID="icon-right-header"
        onPress={onPressIconRight}
        underlayColor={WHITE}
        style={styles.containerIconRight}>
        <View>
          <Image source={imageRight} />
        </View>
      </TouchableHighlight>
    )}
  </View>
);

Header.propTypes = {
  testID: string,
  title: string,
  imageLeft: number,
  onPressIconLeft: func,
  imageRight: number,
  onPressIconRight: func,
  stylesHeader: object,
  stylesTitle: object,
};

export default Header;
