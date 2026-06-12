import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createAsyncStorage } from '@react-native-async-storage/async-storage';
// import AsyncStorage from '@react-native-async-storage/async-storage'

const AsyncStorage = createAsyncStorage("appDB");

const AsyncStorageExample = () => {
const [username,setUsername] = useState('')
const [storedUsername,setStoredUsername] = useState('')

const saveUsername = async() => {
await AsyncStorage.setItem('username',username)
setUsername('')
Alert.alert('Username Store Successfully')
}

const retriveUsername = async() => {
const fetchUsername = await AsyncStorage.getItem('username')
if(fetchUsername){
setStoredUsername(fetchUsername)
Alert.alert('Username Retrive Successfully')
}else{
Alert.alert('Username Not Found')
}
}

const removeUsername = async() => {
await AsyncStorage.removeItem('username')
setStoredUsername('')
Alert.alert('Username Removed')
}

useEffect( () => {
    retriveUsername();
},[])

  return (
    <View>
      <Text>AsyncStorageExample</Text>
      <TextInput
        placeholder='Enter username'
        value={username}
        onChangeText={setUsername}
      />
      <Button title='Store Username' onPress={saveUsername}/>
      <Button title='Retrive Username' onPress={retriveUsername}/>
      <Button title='Remove Username' onPress={removeUsername}/>
      <Text>Stored Username: {storedUsername}  </Text>
    </View>
  )
}

export default AsyncStorageExample

