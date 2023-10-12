import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../styles/Colors';
import {COLORS, FONTS} from '../../styles';
import {CarSteering} from '../../assets';

const Splash = () => {
  return (
    <View style={styles.mainContainer}>
      <CarSteering />
      <Text style={styles.taxiGate}>Taxi Gate</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taxiGate: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: 18,
    paddingTop: 10,
  },
});

export default Splash;
