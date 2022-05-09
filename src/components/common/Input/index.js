import React, { useEffect } from 'react';
import { arrayOf, bool, func, oneOfType, string, object } from 'prop-types';
import { View, TextInput, Text } from 'react-native';
import { GRAY } from 'constants/colors';
import styles from './styles';

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  placeholderTextColor,
  upperCasePlaceholder,
  error,
  active,
  touched,
  styleContainer,
  styleInput,
  ...props
}) => {
  // Register field in the form
  useEffect(() => {
    onChangeText(value, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={[styles.container, styleContainer]}>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.viewInput}>
        <TextInput
          style={[styles.input, touched && !!error && styles.inputError, styleInput]}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={placeholderTextColor}
          placeholder={upperCasePlaceholder ? placeholder.toUpperCase() : placeholder}
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
  placeholderTextColor: string,
  upperCasePlaceholder: bool,
  error: oneOfType([arrayOf(string), string]),
  active: bool.isRequired,
  touched: bool.isRequired,
  styleContainer: object,
  styleInput: object,
};

Input.defaultProps = {
  label: '',
  value: '',
  placeholder: '',
  placeholderTextColor: GRAY,
  upperCasePlaceholder: true,
  error: '',
  styleContainer: {},
  styleInput: {},
};

export default Input;
