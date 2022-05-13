import React from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { object, element } from 'prop-types';
import { IS_IOS } from 'constants/platforms';
import styles from './styles';

const KeyboardAreaView = ({ children, styleContainer, styleContentScrollView, ...props }) => {
  return (
    <KeyboardAvoidingView
      behavior={IS_IOS ? 'padding' : ''}
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
