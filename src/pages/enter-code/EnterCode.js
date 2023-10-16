import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, EnterCodeLayout} from '../../components';
import {moderateScale} from 'react-native-size-matters';
import {COLORS, FONTS} from '../../styles';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import _BackgroundTimer from 'react-native-background-timer';
import {MAP_VIEW_SCREEN} from '../../constants/ScreenRoute';

const CELL_COUNT = 4;

const EnterCode = ({navigation}) => {
  const [value, setValue] = useState('');
  const [isAllFocused, setIsAllFocused] = useState(false);
  const [seconds, setSeconds] = useState(180);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    const timer = _BackgroundTimer.setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        _BackgroundTimer.clearInterval(timer);
        // Handle otp timer expiration here, e.g., request a new OTP
      }
    }, 1000);
    return () => _BackgroundTimer.clearInterval(timer);
  }, [seconds]);

  const formattedSeconds = (seconds % 60).toString().padStart(2, '0');
  const formattedMinutes = Math.floor(seconds / 60);

  return (
    <EnterCodeLayout>
      <View style={styles.mainContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.enterCode}>Enter Code</Text>
          <Text style={styles.label}>
            Enter the four digit code we sent to your phone number
          </Text>
        </View>
        <CodeField
          onFocus={() => setIsAllFocused(!isAllFocused)}
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => {
            return (
              <View
                key={index}
                style={[
                  {...styles.cell, borderColor: COLORS.disabledColor},
                  isAllFocused && {
                    ...styles.focusCell,
                    borderColor: COLORS.primaryColor,
                  },
                  {marginLeft: index == 0 ? 0 : 10},
                ]}
                onLayout={getCellOnLayoutHandler(index)}>
                <Text>{symbol || (isFocused ? <Cursor /> : null)}</Text>
              </View>
            );
          }}
        />
        <View style={styles.otpContainer}>
          <Text>
            {seconds > 0
              ? `OTP will be expired in ${
                  formattedMinutes > 0 ? formattedMinutes : ''
                } ${
                  formattedMinutes > 0
                    ? formattedMinutes > 1
                      ? 'minutes'
                      : 'minute'
                    : ''
                } ${formattedSeconds} ${
                  formattedSeconds > 1 ? 'seconds' : 'second'
                }`
              : 'OTP is expired'}
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <Button
            title={'continue'}
            backgroundColor={COLORS.primaryColor}
            onBtnPress={() => navigation.navigate(MAP_VIEW_SCREEN)}
          />
        </View>
      </View>
    </EnterCodeLayout>
  );
};

export default EnterCode;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    height: moderateScale(380, 0.3),
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: 'absolute',
    top: 70,
    left: 20,
    right: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  labelContainer: {
    flex: 1,
    paddingTop: 20,
  },
  cell: {
    backgroundColor: COLORS.disabledColor,
    justifyContent: 'center',
    alignItems: 'center',
    width: moderateScale(50, 0.3),
    height: moderateScale(80, 0.3),
    borderWidth: 1,
    borderColor: '#00000030',
    textAlign: 'center',
    borderRadius: 8,
  },
  focusCell: {
    borderColor: '#000',
  },
  enterCode: {
    color: COLORS.primaryColor,
    fontFamily: FONTS.bold,
    fontSize: 20,
  },
  label: {paddingTop: 20, fontFamily: FONTS.medium, fontSize: 12},
  btnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 30,
  },
  otpContainer: {alignItems: 'center', marginTop: 20},
  otpText: {
    fontSize: 12,
    fontFamily: FONTS.regular,
    color: '#000',
  },
});
