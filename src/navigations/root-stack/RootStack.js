import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  COMPLETE_STEP_SCREEN,
  ENTER_CODE_SCREEN,
  HOME_SCREEN,
  SIGN_IN_SCREEN,
  SIGN_UP_SCREEN,
} from '../../constants/ScreenRoute';
import {
  CompleteStepScreen,
  EnterCodeScreen,
  HomeScreen,
  SignInScreen,
  SignUpScreen,
} from '../../pages';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen name={SIGN_UP_SCREEN} component={SignUpScreen} />
        <Stack.Screen name={SIGN_IN_SCREEN} component={SignInScreen} />
        <Stack.Screen
          name={COMPLETE_STEP_SCREEN}
          component={CompleteStepScreen}
        />
        <Stack.Screen name={ENTER_CODE_SCREEN} component={EnterCodeScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
