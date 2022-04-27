import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { object, element } from 'prop-types';
import styles from './styles';

const KeyboardAreaView = ({ children, styleContainer, styleContentScrollView, ...props }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.keyboardAvoidingView, styleContainer]}
      {...props}>
      <ScrollView contentContainerStyle={[styles.scrollView, styleContentScrollView]}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

KeyboardAreaView.propTypes = {
  children: element.isRequired,
  styleContainer: object,
  styleContentScrollView: object,
};

KeyboardAreaView.defaultProps = {
  styleContainer: {},
  styleContentScrollView: {},
};

export default KeyboardAreaView;
