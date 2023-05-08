import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, Image, TextInput, Button, ToastAndroid, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { Colors } from '../../theme/AppTheme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles'

export const HomeScreen = () => {

  const { email, password, onChange } = useViewModel()

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    // it is like a column
    <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={ require('../../../../assets/logo.png')}
            style={styles.logoImage}
          />

          <Text style={styles.logoText}>Coffee APP</Text>
        </View>
        <View style={styles.form}>
          
          <Text style={styles.formText}>Sign In</Text>

          <CustomTextInput 
            image={require('../../../../assets/email.png')}
            placeholder='Email'
            keyboardType='email-address'
            property='email'
            onChangeText={onChange}
            value={email}
          />

          <CustomTextInput 
            image={require('../../../../assets/lock.png')}
            placeholder='Password'
            keyboardType='default'
            secureTextEntry={true}
            property='password'
            onChangeText={onChange}
            value={password}
          />

          <View style={{
            marginTop: 30
          }}>
            <RoundedButton 
              text={'LOGIN'}
              onPress={() => {
                console.log({ email, password})
              }}
            />
          </View>

          <View style={ styles.formRegister }>
            <Text>Does not have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={styles.formRegisterText}>Register!</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
}

