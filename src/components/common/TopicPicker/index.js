import React, { useEffect } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { bool, func, object, string } from 'prop-types';
import { WHITE } from 'constants/colors';
import styles from './styles';

const TopicPicker = ({ label, value, onValueChange, placeholder, error, touched, onPress }) => {
  // Register field in the form
  useEffect(() => {
    onValueChange(value, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TouchableHighlight onPress={onPress} underlayColor={WHITE}>
      <View style={styles.container}>
        {!!label && <Text style={styles.label}>{label}</Text>}
        <View style={styles.viewInput}>
          <View style={styles.topicContainer}>
            {!!value.icon && <Image style={styles.image} source={{ uri: value.icon }} />}
            <Text style={styles.textInput}>{value.label ?? placeholder}</Text>
          </View>

          {touched && !!error && (
            <Text accessibilityLabel="form-error" style={styles.errorText}>
              {error}
            </Text>
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
};

TopicPicker.propTypes = {
  label: string,
  value: object,
  onValueChange: func.isRequired,
  placeholder: string,
  error: string,
  touched: bool.isRequired,
};

export default TopicPicker;
