/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const InputText = () => {
  const [username,setUserName] = useState('')

  return (
    <View>
      <Text style={{fontSize:20}}>InputText</Text>
      <Text style={{fontSize:20}}>Username : {username}</Text>

      <TextInput style={{ fontSize:20 , 
      borderWidth:2 , borderColor:'green', margin:10}} placeholder='Enter Your Username'
       onChangeText={(value) => setUserName(value)}
        value={username}
       />
<Button title='Clear' onPress={() => setUserName('')}/>
    </View>
  )
}

export default InputText