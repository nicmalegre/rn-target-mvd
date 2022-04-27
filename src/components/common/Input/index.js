import React, { useEffect } from 'react';
import { arrayOf, bool, func, oneOfType, string } from 'prop-types';
import { View, TextInput, Text } from 'react-native';
import { GRAY } from 'constants/colors';
import styles from './styles';

const Input = ({ label, value, onChangeText, placeholder, error, active, touched, ...props }) => {
  // Register field in the form
  useEffect(() => {
    onChangeText(value, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.viewInput}>
        <TextInput
          style={[styles.input, touched && !!error && styles.inputError]}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={GRAY}
          placeholder={placeholder.toUpperCase()}
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
  placeholder: string,
  error: oneOfType([arrayOf(string), string]),
  active: bool.isRequired,
  touched: bool.isRequired,
};

Input.defaultProps = {
  label: '',
  value: '',
  placeholder: '',
  error: '',
};

export default Input;
