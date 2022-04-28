import React from 'react';
import { SafeAreaView } from 'react-native';
import Header from '../Header';
import styles from './styles';

const Container = ({ children, headerProps }) => {
  const { testID, title, imageLeft, onPressIconLeft, imageRight, onPressIconRight } =
    headerProps || {};
  return (
    <SafeAreaView style={styles.container}>
      <Header
        testID={testID}
        title={title}
        imageLeft={imageLeft}
        onPressIconLeft={onPressIconLeft}
        imageRight={imageRight}
        onPressIconRight={onPressIconRight}
      />
      {children}
    </SafeAreaView>
  );
};

export default Container;
