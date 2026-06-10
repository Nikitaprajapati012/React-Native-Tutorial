import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { loginUser } from 'src/components/services/auth'

const LoginFirebase = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLoginFirebase = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill all fields')
      return
    }

    try {
      const { emailVerified } = await loginUser(email, password)
      if (emailVerified) {
        Alert.alert('Success', 'You are logged In')
        setEmail('')
        setPassword('')
      } else {
        Alert.alert('Error', 'Email is not verified')
        setEmail('')
        setPassword('')
      }
    } catch (error) {
      Alert.alert('Error', error.message)
      setEmail('')
      setPassword('')
    }
  }

  return (
    <View className='flex-1 justify-center items-center bg-gray-100'>
      <View className='bg-white p-8 rounded-lg shadow-lg w-96'>
        <Text className='text-3xl font-bold text-pink-600 mb-8 text-center'>Login</Text>
        <TextInput
          placeholder='Email'
          className='border border-gray-300 p-4 w-full mb-4 rounded-lg focus:border-pink-500'
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
          autoCapitalize='none'
        />

        <TextInput
          placeholder='Password'
          className='border border-gray-300 p-4 w-full mb-4 rounded-lg focus:border-pink-500'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity className='bg-pink-600 p-4 rounded-lg' onPress={handleLoginFirebase}>
          <Text className='text-white text-center font-semibold text-lg'>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity className='mt-4' onPress={() => navigation.navigate('Register')}>
          <Text className='text-pink-600 text-center'>Don't have an account? Register</Text>
        </TouchableOpacity>

        <TouchableOpacity className='mt-4' onPress={() => navigation.navigate('ForgotPassword')}>
          <Text className='text-pink-600 text-center'>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginFirebase
