import React, { useEffect } from 'react';
import { arrayOf, bool, func, oneOfType, string } from 'prop-types';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';

const Input = ({ label, value, onChangeText, error, active, touched, ...props }) => {
  // Register field in the form
  useEffect(() => {
    onChangeText(value, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.viewInput}>
        <TextInput
          style={[styles.input, touched && !!error && styles.inputError]}
          value={value}
          onChangeText={onChangeText}
          {...props}
        />
        {touched && !!error && (
          <Text accessibilityLabel="form-error" style={styles.errorText}>
            {error}
          </Text>
        )}
      </View>
    </View>
  );
};

Input.propTypes = {
  label: string,
  value: string,
  onChangeText: func.isRequired,
  error: oneOfType([arrayOf(string), string]),
  active: bool.isRequired,
  touched: bool.isRequired,
};

export default Input;
