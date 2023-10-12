import {View, Text, Dimensions, Image, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../styles';

const {width} = Dimensions.get('screen');

const HomeCarousel = ({image, label, description}) => {
  return (
    <View style={styles.mainContainer}>
      <Image source={image} style={styles.img} />
      <View style={styles.txtWrapper}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: width / 2,
    height: width / 2,
    resizeMode: 'contain',
  },
  txtWrapper: {marginHorizontal: 20, alignItems: 'center'},
  label: {color: COLORS.white, fontFamily: FONTS.bold, fontSize: 20},
  description: {
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: FONTS.light,
    fontSize: 12,
  },
});

export default HomeCarousel;
