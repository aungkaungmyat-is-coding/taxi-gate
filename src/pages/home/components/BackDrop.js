import {Animated, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import {bgs} from '../data/data';

const {width} = Dimensions.get('screen');

const BackDrop = ({scrollX}) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs.map(bg => bg),
  });
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        {backgroundColor: backgroundColor},
      ]}></Animated.View>
  );
};

export default BackDrop;
