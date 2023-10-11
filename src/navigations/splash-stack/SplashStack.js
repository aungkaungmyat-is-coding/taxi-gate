import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SPLASH_SCREEN} from '../../constants/ScreenRoute';
import {SplashScreen} from '../../pages';

const Stack = createStackNavigator();

export default function SplashStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: ({index, current, next, layouts: {screen}}) => {
          const translateX = current.progress.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [screen.width, 0, 0],
          });
          const opacity = next?.progress.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [1, 0, 0],
          });
          return {cardStyle: {opacity, transform: [{translateX}]}};
        },
      }}>
      <Stack.Screen name={SPLASH_SCREEN} component={SplashScreen} />
    </Stack.Navigator>
  );
}
