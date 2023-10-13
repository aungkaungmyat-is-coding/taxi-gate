import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HOME_SCREEN,
  SIGN_IN_SCREEN,
  SIGN_UP_SCREEN,
} from '../../constants/ScreenRoute';
import {HomeScreen, SignInScreen, SignUpScreen} from '../../pages';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen name={SIGN_UP_SCREEN} component={SignUpScreen} />
      <Stack.Screen name={SIGN_IN_SCREEN} component={SignInScreen} />
    </Stack.Navigator>
  );
}
