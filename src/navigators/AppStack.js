import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { CHATS_SCREEN, MAIN_SCREEN, PROFILE_SCREEN } from 'constants/screens';

import MainScreen from 'screens/MainScreen';
import ProfileScreen from 'screens/ProfileScreen';
import ChatsScreen from 'screens/ChatsScreen';

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={MAIN_SCREEN} component={MainScreen} />
    <Stack.Screen name={PROFILE_SCREEN} component={ProfileScreen} />
    <Stack.Screen name={CHATS_SCREEN} component={ChatsScreen} />
  </Stack.Navigator>
);

export default AppStack;
