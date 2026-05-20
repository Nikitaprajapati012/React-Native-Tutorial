/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'node_modules/axios'

const PATCH_API = () => {
    const [formdata,setFormData] = useState({id:'',name:'',email:''})

    const handleInput = (field,value) => {
        setFormData({...formdata,[field]:value})
    }

    const handleUpdate = async() => {
        const API = "http://172.16.24.255:3000/users/";
        try {
         const response = await axios.patch(API+`${formdata.id}`,
            {
            ...formdata.name && {name:formdata.name},
                ...formdata.email && {email:formdata.email},
         })
         Alert.alert("Success","Data Updated Successfully")
         console.log(response.data)
         setFormData({id:'',name:'',email:''})
        } 
         catch (error) {
            Alert.alert("Error","Data Updation Failed")
            console.log(error)
        }
    }
  return (
    <View>
      <Text style={{textAlign:'center',fontSize:30,marginBottom:10}}>PATCH_API</Text>
      <TextInput
        placeholder='Enter ID'
        value={formdata.id}
        onChangeText={(value) => handleInput('id',value)}
      />
      <TextInput
        placeholder='Enter Name'
        value={formdata.name}
        onChangeText={(value) => handleInput('name',value)}
      />
      <TextInput
        placeholder='Enter Email'
        value={formdata.email}
        onChangeText={(value) => handleInput('email',value)}
      />
      <Button title='Update' onPress={handleUpdate}/>
    </View>
  )
}

export default PATCH_API

