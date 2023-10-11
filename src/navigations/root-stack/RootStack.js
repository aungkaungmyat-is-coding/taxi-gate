import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HOME_SCREEN} from '../../constants/ScreenRoute';
import {HomeScreen} from '../../pages';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
}
