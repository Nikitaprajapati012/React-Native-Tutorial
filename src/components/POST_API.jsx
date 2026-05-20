/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'node_modules/axios'

const POST_API = () => {

const [formData,setFormData] = useState({id:'',name:'',email:''})

const handleInput = (field,value) => {
    setFormData({...formData,[field] :value})
}

const handleSubmit = async() => {
    try {
    const API = "http://172.16.24.255:3000/users";
       const response = await axios.post(API,formData)
       console.log(response.data)
       Alert.alert('Success!','Data Submitted Successfully')
setFormData({id:'',name:'',email:''})
    } catch (error) {
        Alert.alert("Error", "Failed to submit the data")
        console.error(error)
    }
}

  return (
    <View>
      <Text style={{textAlign:'center',fontSize:30,marginBottom:10}}>POST_API</Text>
      <TextInput 
        placeholder='Enter ID'
        value={formData.id}
        onChangeText={(value) => handleInput('id',value)}
      />
      <TextInput 
        placeholder='Enter Name'
        value={formData.name}
        onChangeText={(value) => handleInput('name',value)}
      />
      <TextInput 
        placeholder='Enter Email'
        value={formData.email}
        onChangeText={(value) => handleInput('email',value)}
      />
      <Button title='Submit' onPress={handleSubmit}/>
    </View>
  )
}
9904631882
export default POST_API

