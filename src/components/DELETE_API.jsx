/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'node_modules/axios'

const DELETE_API = () => {
    const [id,setID] = useState()

    const handleDelete = async() => {
        const API = "http://172.16.24.255:3000/users/";

        try {
              const response = await axios.delete(API+`${id}`)
        console.log(response.data)
        Alert.alert("Data delete successfully")
        setID('')
        } catch (error) {
            Alert.alert("Data deletion failed")
        }
    }

  return (
    <View>
      <Text style={{textAlign:'center',fontSize:30,marginBottom:10}}>DELETE_API</Text>
      <TextInput
        placeholder='Enter ID'
        value={id}
        onChangeText={(value)=> setID(value)}
      />
      <Button title='Delete' onPress={handleDelete}/>
    </View>
  )
}

export default DELETE_API