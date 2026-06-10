import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { resetPasswordResetEmail } from 'src/components/services/auth'

const ForgotPassword = ({navigation}) => {
    const [email, setEmail] = React.useState('')
    const handleForgotPassword = async() => {
        console.log('Forgot Password for:', email)
        
        try {
            await resetPasswordResetEmail(email)
            Alert.alert('Success', 'Password reset email sent successfully')
            console.log('Password reset email sent successfully')
            setEmail('')
        } catch (error) {
            Alert.alert('Error', error.message)
            console.error('Error sending password reset email:', error)
            setEmail('')
        }
    }
    
  return (
    <View className='flex-1 justify-center items-center bg-gray-100'>
    <View className='bg-white p-8 rounded-lg shadow-lg w-96' >
    <Text className='text-3xl font-bold text-pink-600'>Forgot Password</Text>
    <TextInput
        className='border border-gray-300 p-4 w-full mb-4 rounded-lg focus:border-pink-500'
        placeholder='Enter email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
    />
    <TouchableOpacity className='bg-pink-600 p-4 rounded-lg' onPress={handleForgotPassword}>
        <Text className='text-white text-center font-semibold text-lg'>Reset Password</Text>
    </TouchableOpacity>
    <TouchableOpacity className='mt-4' onPress={() => {navigation.navigate('Login')
    }}>
        <Text className='text-pink-600 text-center'>Back to Login</Text>
    </TouchableOpacity>

    </View>
    </View>
  )
}

export default ForgotPassword

// src/components/services/auth.js