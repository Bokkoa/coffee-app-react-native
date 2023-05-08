import React from 'react'
import { View, Text, Image, TextInput, ToastAndroid, TouchableOpacity, StyleSheet } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { Colors } from '../../theme/AppTheme';
import useViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles'

const RegisterScreen = () => {

  const { 
      name, 
      lastName, 
      email, 
      phone, 
      password, 
      confirmPassword,
      onChange,
      register
    } = useViewModel()


  return (
      // it is like a column
      <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={ require('../../../../assets/user.png')}
          style={styles.logoImage}
        />

        <Text style={styles.logoText}>Choose an Image</Text>
      </View>
      <View style={styles.form}>
        
        <Text style={styles.formText}>Sign Up</Text>

        <CustomTextInput 
          image={require('../../../../assets/user.png')}
          placeholder='Name'
          property='name'
          value={name}
          onChangeText={onChange}
          keyboardType='default'
        />
        
        <CustomTextInput 
          image={require('../../../../assets/user.png')}
          placeholder='Last name'
          property='lastName'
          value={lastName}
          onChangeText={onChange}
          keyboardType='default'
        />

        <CustomTextInput 
          image={require('../../../../assets/email.png')}
          placeholder='Email'
          property='email'
          value={email}
          onChangeText={onChange}
          keyboardType='email-address'
        />

        <CustomTextInput 
          image={require('../../../../assets/phone.png')}
          placeholder='Phone'
          property='phone'
          value={phone}
          onChangeText={onChange}
          keyboardType='numeric'
        />

        <CustomTextInput 
            image={require('../../../../assets/lock.png')}
            placeholder='Password'
            property='password'
            value={password}
            onChangeText={onChange}
            keyboardType='default'
            secureTextEntry={true}
        />

        <CustomTextInput 
            image={require('../../../../assets/lock.png')}
            placeholder='Repeat Password'
            property='confirmPassword'
            value={confirmPassword}
            onChangeText={onChange}
            keyboardType='default'
            secureTextEntry={true}
        />

        <View style={{
          marginTop: 30
        }}>
          <RoundedButton 
            text={'SIGN UP'}
            onPress={() => register()}
          />
        </View>
      </View>
  </View>
);
}

export default RegisterScreen