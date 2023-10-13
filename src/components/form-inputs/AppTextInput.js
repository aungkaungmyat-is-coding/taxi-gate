import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';
import {COLORS, FONTS} from '../../styles';
import {moderateScale} from 'react-native-size-matters';
import ErrorMessage from '../error-message/ErrorMessage';

export default function AppTextInput({
  inpRef,
  control,
  textArea = false,
  name,
  rule,
  label,
  placeholder,
  editable = true,
  onSubmitEditing,
  keyboardType,
  required = true,
  maxLength,
  onChangeText,
  rightIcon,
  secureTextEntry = false,
  containerStyle,
}) {
  return (
    <View style={{...containerStyle}}>
      {label && (
        <View style={{flexDirection: 'row'}}>
          <Text>{label}</Text>
          {required && <Text style={{color: 'red'}}>*</Text>}
        </View>
      )}
      <Controller
        control={control}
        name={name}
        rules={rule}
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => {
          return (
            <>
              {name == 'phone' && (
                <View style={styles.phoneContainer}>
                  <Text style={{fontFamily: FONTS.regular}}>+959</Text>
                  <View style={styles.phone} />
                </View>
              )}
              <TextInput
                style={styles.textInputContainer}
                ref={inpRef ? inpRef : null}
                placeholder={placeholder}
                value={value}
                onBlur={onBlur}
                maxLength={maxLength}
                editable={editable}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType ? keyboardType : 'default'}
                onSubmitEditing={() => onSubmitEditing && onSubmitEditing()}
                placeholderTextColor={'rgba(0,0,0,0.3)'}
                multiline={textArea ? true : false}
                numberOfLines={textArea ? 4 : 1}
                onChangeText={value => {
                  if (onChangeText) {
                    onChangeText(value, onChange);
                  } else {
                    onChange(value);
                  }
                }}
              />
              {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
              {error && <ErrorMessage errorMessage={error.message} />}
            </>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  phoneContainer: {flexDirection: 'row', alignItems: 'center'},
  phone: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: 1,
    height: '80%',
    marginHorizontal: 10,
  },
  textInputContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.primaryColor,
  },
  rightIcon: {
    width: moderateScale(40, 0.3),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
});
