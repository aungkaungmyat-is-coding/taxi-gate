import {View, Text, StyleSheet} from 'react-native';
import React, {useRef} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {COLORS, FONTS} from '../../styles';
import {AppTextInput, Button, SignInAndOutLayout} from '../../components';
import {useForm} from 'react-hook-form';

const formRules = {
  email: {
    required: 'Email is required',
  },
  password: {
    required: 'Password is required',
  },
  defaultValues: {
    email: '',
    password: '',
  },
};

const SignIn = ({navigation}) => {
  const inpEmailRef = useRef();
  const inpPasswordRef = useRef();
  const {control, handleSubmit} = useForm({
    defaultValues: formRules.defaultValues,
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <SignInAndOutLayout>
      <View style={styles.mainContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.signUp}>Sign In</Text>
          <Text style={styles.label}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            odio officiis, suscipit neque provident velit esse, quos animi
            deleniti at fuga voluptas dolorum incidunt harum. Id iusto ut
            reprehenderit fugit.
          </Text>
        </View>
        <View style={{marginTop: 40}}>
          <AppTextInput
            control={control}
            name={'email'}
            rule={formRules.email}
            label={'Email'}
            inpRef={inpEmailRef}
            placeholder={'Enter your email'}
            onSubmitEditing={() => inpPasswordRef.current.focus()}
          />
          <View style={{marginTop: 20}}>
            <AppTextInput
              control={control}
              rule={formRules.password}
              name={'password'}
              label={'Password'}
              placeholder={'Enter  password'}
              inpRef={inpPasswordRef}
              onSubmitEditing={() => inpConfirmPasswordRef.current.focus()}
            />
          </View>
        </View>
        <View style={styles.btnContainer}>
          <Button
            title={'Sign in'}
            backgroundColor={COLORS.primaryColor}
            onBtnPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    </SignInAndOutLayout>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    height: moderateScale(550, 0.3),
    borderRadius: 10,
    backgroundColor: COLORS.white,
    position: 'absolute',
    left: 20,
    right: 20,
    top: -190,
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
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  label: {
    fontFamily: FONTS.medium,
    fontSize: 12,
  },
  signUp: {
    color: COLORS.primaryColor,
    fontFamily: FONTS.bold,
    fontSize: 20,
  },
  btnContainer: {flex: 1, justifyContent: 'flex-end', paddingBottom: 20},
});
