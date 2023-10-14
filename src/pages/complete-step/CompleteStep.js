import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppTextInput, Button, CompleteStepLayout} from '../../components';
import {COLORS, FONTS} from '../../styles';
import {moderateScale} from 'react-native-size-matters';
import {useForm} from 'react-hook-form';
import {ENTER_CODE_SCREEN} from '../../constants/ScreenRoute';

const formRules = {
  phone: {
    required: 'Phone Number is required.',
  },
  defaultValues: {
    phone: '',
  },
};

const CompleteStep = ({navigation}) => {
  const {control, handleSubmit} = useForm({
    defaultValues: formRules.defaultValues,
  });

  const onSubmit = data => {
    console.log(data);
    navigation.navigate(ENTER_CODE_SCREEN);
  };

  return (
    <CompleteStepLayout>
      <View style={styles.mainContainer}>
        <View style={styles.completeStep}>
          <Text style={styles.completeStepLabel}>Complete Step</Text>
          <Text style={styles.label}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            odio officiis, suscipit neque provident velit esse, quos animi
            deleniti at fuga voluptas dolorum incidunt harum.
          </Text>
        </View>
        <View style={{paddingTop: 50}}>
          <AppTextInput
            control={control}
            name={'phone'}
            rule={formRules.phone}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title={'get verify code'}
            backgroundColor={COLORS.primaryColor}
            onBtnPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    </CompleteStepLayout>
  );
};

export default CompleteStep;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    height: moderateScale(400, 0.3),
    borderRadius: 10,
    backgroundColor: COLORS.white,
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: -210,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  completeStep: {paddingTop: 20, flex: 1, justifyContent: 'space-between'},
  completeStepLabel: {
    color: COLORS.primaryColor,
    fontFamily: FONTS.bold,
    fontSize: 20,
  },
  label: {fontFamily: FONTS.regular, fontSize: 14},
  btn: {flex: 1, justifyContent: 'flex-end', paddingBottom: 50},
});
