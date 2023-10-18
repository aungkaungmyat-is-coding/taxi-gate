import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  HISTORY_SCREEN,
  INVITE_FRIEND_SCREEN,
  NOTIFICATION_SCREEN,
  PAYMENT_SCREEN,
  SETTINGS_SCREEN,
} from '../../../constants/ScreenRoute';
import {
  HistoryScreen,
  InviteFriendScreen,
  NotificationScreen,
  PaymentScreen,
  SettinsScreen,
} from '../../../pages';

const Stack = createStackNavigator();

const DrawerStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={PAYMENT_SCREEN} component={PaymentScreen} />
      <Stack.Screen name={HISTORY_SCREEN} component={HistoryScreen} />
      <Stack.Screen name={NOTIFICATION_SCREEN} component={NotificationScreen} />
      <Stack.Screen
        name={INVITE_FRIEND_SCREEN}
        component={InviteFriendScreen}
      />
      <Stack.Screen name={SETTINGS_SCREEN} component={SettinsScreen} />
    </Stack.Navigator>
  );
};

export default DrawerStack;
