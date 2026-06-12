import { View, Text, Alert, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { registerUser } from 'src/components/services/auth'

const Register = ({navigation}) => {
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [confirmPassword,setConfirmPassword] = useState('')


const handleRegister = async () => {
    if(!email || !password || !confirmPassword){
        Alert.alert('Error' , 'Please fill all fields')
        return
    }
    if(password !== confirmPassword){
        Alert.alert('Error', 'Password do not match')
        return
    }
    try {
        await registerUser(email,password)
        Alert.alert('Success' , 'A Verfication Email has been sent to your email address')
        setEmail('')
        setConfirmPassword('')
        setPassword('')
    } catch (error) {
        Alert.alert('Error registering user :' , error.message)
    }
}


  return (
    <View className='flex-1 justify-center items-center bg-gray-100'>
      <View className='bg-white p-8 rounded-lg shadow-lg w-96'>
        <Text className='text-3xl font-bold text-pink-600 mb-8 text-center'>Create Account</Text>
        <TextInput
        className='border border-gray-300 p-4 w-full mb-4 rounded-lg focus:border-pink-500'
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
            autoCapitalize='none'
        />

        <TextInput
        className='border border-gray-300 p-4 w-full mb-4 rounded-lg focus:border-pink-500'
            placeholder='Password'
value={password}
onChangeText={setPassword}
secureTextEntry
        />

        <TextInput
        className='border border-gray-300 p-4 w-full mb-4 rounded-lg focus:border-pink-500'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
        />

        <TouchableOpacity onPress={handleRegister}
        className='bg-pink-600 p-4 rounded-lg'>
            <Text
            className='text-white text-center font-semibold text-lg'
            >Register</Text>
        </TouchableOpacity>

        <TouchableOpacity className='mt-4' onPress={() => navigation.navigate('Login')}>
            <Text className='text-pink-600 text-center'>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Register


