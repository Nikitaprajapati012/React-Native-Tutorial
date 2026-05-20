/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button, Alert } from 'react-native'
import React from 'react'

const AlertExample = () => {
const showAlert = () => {
    Alert.alert('Alert Title','Hey !! I am Alert Dailog',[
        {
            text:'Cancel',
            onPress:() => console.log('Cancel Button Click'),
            style:'cancel'
        },
        {text:'OK',
            onPress:() => console.log('OK Button Click'),
        },
    ])
}

  return (
    <View>
      <Text style={{fontSize:25}}>AlertExample</Text>
      <Button title='Show Alert' onPress={showAlert}/>
    </View>
  )
}

export default AlertExample
