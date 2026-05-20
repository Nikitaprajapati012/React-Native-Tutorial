import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const Login = ({navigation}) => {
const [username,setUsername] = useState('')

  return (
    <View>
      <Text>Login</Text>

      <TextInput placeholder='Enter Usrname' onChangeText={setUsername}/>
      {/* <Button title='Login' onPress={()=> navigation.navigate('About',{username : 'Nikita', age:22})}/> */}
<Button title='Login' onPress={()=> navigation.navigate('About',{username})}/>
    </View>
  )
}

export default Login

