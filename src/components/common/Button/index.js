import React from 'react';
import { string } from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Button = ({ title, testID, titleTestID, ...props }) => {
  return (
    <TouchableOpacity style={styles.button} testID={testID} {...props}>
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
};

Button.defaultProps = {
  testID: 'submit-button',
  titleTestID: 'title-button',
};

export default Button;
