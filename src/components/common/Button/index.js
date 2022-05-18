import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { string, object, oneOf } from 'prop-types';
import { BUTTON_TYPES } from 'constants/buttons';
import styles from './styles';

const Button = ({ title, testID, titleTestID, styleButton, variant, ...props }) => {
  const isDanger = variant === BUTTON_TYPES.DANGER;
  return (
    <TouchableOpacity
      style={[styles.button, isDanger && styles.danger, styleButton]}
      testID={testID}
      {...props}>
      <Text testID={titleTestID} style={styles.buttonTitle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  title: string.isRequired,
  testID: string,
  titleTestID: string,
  styleButton: object,
  variant: oneOf(Object.values(BUTTON_TYPES)),
};

Button.defaultProps = {
  testID: 'submit-button',
  titleTestID: 'title-button',
  styleButton: {},
  variant: BUTTON_TYPES.PRIMARY,
};

export default Button;
