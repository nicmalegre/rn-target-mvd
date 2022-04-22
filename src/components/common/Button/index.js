import React from 'react';
import { string } from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Button = ({ title, testId, ...props }) => {
  return (
    <TouchableOpacity style={styles.button} testID={testId} {...props}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  title: string.isRequired,
  testId: string,
};

Button.defaultProps = {
  testId: 'submit-button',
};

export default Button;
