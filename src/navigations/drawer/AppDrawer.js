import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from './components/CustomDrawerContent';
import {MAP_VIEW_SCREEN} from '../../constants/ScreenRoute';
import {MapViewScreen} from '../../pages';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerType: 'front',
        headerShown: false,
        drawerStyle: {
          backgroundColor: 'transparent',
          width: '80%',
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name={MAP_VIEW_SCREEN} component={MapViewScreen} />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
