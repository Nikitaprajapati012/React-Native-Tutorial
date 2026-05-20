/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import { View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

const ShowChild = () => {
    useEffect(() =>{
        return() => {
Alert.alert('child component unmount');
    }
    },[]);
        
  return (
    <View>
      <Text style={{fontSize:30}}>Child Component</Text>
    </View>
  )
}

export default ShowChild