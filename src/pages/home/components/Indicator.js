import {View, Animated, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {COLORS} from '../../../styles';
import {tempImgData} from '../data/data';

const {width} = Dimensions.get('screen');

const Indicator = ({scrollX}) => {
  return (
    <View style={styles.mainContainer}>
      {tempImgData.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 1.9, 0.6],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{
              ...styles.animatedView,
              transform: [{scale}],
              opacity: opacity,
            }}></Animated.View>
        );
      })}
    </View>
  );
};

export default Indicator;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedView: {
    height: moderateScale(8, 0.3),
    width: moderateScale(8, 0.3),
    borderRadius: 5,
    backgroundColor: COLORS.white,
    margin: 10,
  },
});
