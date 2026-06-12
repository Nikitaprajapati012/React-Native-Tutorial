/* eslint-disable react-native/no-inline-styles */
import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OnPress = () => {
  
let name = 'Nikita'
    const getName = () => {
        name = 'Alexa';
console.warn('Name: ', name);
    }

  return (
    <View>
      <Text style={{ fontSize:30 }}>{name}</Text>
      <Button title="Press here" onPress={getName}/>
      {/* <Button title='Press' onPress={() => {getName('Nikita')}}/> */}
    </View>
  )
}
export default OnPress

const styles = StyleSheet.create({})