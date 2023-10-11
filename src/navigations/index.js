import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {ROOT_STACK, SPLASH_STACK} from '../constants/ScreenRoute';
import SplashStack from './splash-stack/SplashStack';
import RootStack from './root-stack/RootStack';

const Stack = createStackNavigator();

function RootNavigation() {
  const [isLoading, setIsLoading] = useState(true);
  const navigationRef = React.useRef();
  const routeNameRef = React.useRef();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoading(!isLoading);
    }, 1500);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;
        if (previousRouteName !== currentRouteName) {
        }
        routeNameRef.current = currentRouteName;
      }}>
      <Stack.Navigator
        initialRouteName={SPLASH_STACK}
        screenOptions={{headerShown: false}}>
        {isLoading ? (
          <Stack.Screen name={SPLASH_STACK} component={SplashStack} />
        ) : (
          <Stack.Screen name={ROOT_STACK} component={RootStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
