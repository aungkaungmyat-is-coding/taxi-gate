import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import RootNavigation from './src/navigations';
import {COLORS} from './src/styles';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={COLORS.primaryColor} />
      <RootNavigation />
    </>
  );
};

export default App;
