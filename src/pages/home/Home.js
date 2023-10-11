import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {HOME_SCREEN} from '../../constants/ScreenRoute';

export default function Home({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(HOME_SCREEN, {
        params: {},
      });
    }, 5000);
  }, []);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
