import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  COMPLETE_STEP_SCREEN,
  DRAWER_NAVIGATION,
  ENTER_CODE_SCREEN,
  HISTORY_SCREEN,
  HOME_SCREEN,
  INVITE_FRIEND_SCREEN,
  MAP_VIEW_SCREEN,
  NOTIFICATION_SCREEN,
  PAYMENT_SCREEN,
  SETTINGS_SCREEN,
  SIGN_IN_SCREEN,
  SIGN_UP_SCREEN,
} from '../../../constants/ScreenRoute';
import {
  CompleteStepScreen,
  EnterCodeScreen,
  HistoryScreen,
  HomeScreen,
  InviteFriendScreen,
  MapViewScreen,
  NotificationScreen,
  PaymentScreen,
  SettinsScreen,
  SignInScreen,
  SignUpScreen,
} from '../../../pages';
import DrawerNavigation from '../../drawer/AppDrawer';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={DRAWER_NAVIGATION} component={DrawerNavigation} />
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
      <Stack.Group>
        <Stack.Screen name={MAP_VIEW_SCREEN} component={MapViewScreen} />
      </Stack.Group>
      {/* Drawer */}
      <Stack.Group>
        <Stack.Screen name={PAYMENT_SCREEN} component={PaymentScreen} />
        <Stack.Screen name={HISTORY_SCREEN} component={HistoryScreen} />
        <Stack.Screen
          name={NOTIFICATION_SCREEN}
          component={NotificationScreen}
        />
        <Stack.Screen
          name={INVITE_FRIEND_SCREEN}
          component={InviteFriendScreen}
        />
        <Stack.Screen name={SETTINGS_SCREEN} component={SettinsScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
