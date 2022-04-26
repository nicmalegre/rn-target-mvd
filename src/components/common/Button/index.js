import React from 'react';
import { string } from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Button = ({ title, testID, ...props }) => {
  return (
    <TouchableOpacity style={styles.button} testID={testID} {...props}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  title: string.isRequired,
  testID: string,
};

Button.defaultProps = {
  testID: 'submit-button',
};

export default Button;
