 
/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [count,setCount] = useState(1)

useEffect(() => {
    console.log('API calling');
    Alert.alert('API calling')
},[]);

  return (
    <View>
      <Text style={{fontSize:30}}>UseEffectHook</Text>
      <Text style={{fontSize:30}}>Count: {count}</Text>
      <Button title='Counter' onPress={()=> setCount(count+1)}/>
    </View>
  )
}

export default UseEffectHook


