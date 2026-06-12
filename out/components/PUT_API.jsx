/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'node_modules/axios'

const PUT_API = () => {
const [formData,setFormData]= useState({id:'',name:'',email:''})
const handleInput = (field,value) => {
    setFormData({...formData,[field] : value})

}
const handleUpdate = async() => {
    const API = "http://172.16.24.255:3000/users/";

   try {
   const response = await axios.put(API+`${formData.id}`,{
    name :formData.name,
    email : formData.email,
   })
   console.log(response.data)
   setFormData({id:'',name:'',email:''})
   Alert.alert('Success','Data Updated successfully')
   } catch (error) {
    Alert.alert('Error','Data updation failed')
   }
}

  return (
    <View>
      <Text style={{textAlign:'center',fontSize:30,marginBottom:10}}>PUT_API</Text>
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
      <Button title='Update' onPress={handleUpdate}/>
    </View>
  )
}

export default PUT_API