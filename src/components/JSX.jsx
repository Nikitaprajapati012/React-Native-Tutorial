import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const JSX = () => {
  let name = "Nikita"
  const getAge = () =>{
    return 22
  }

  return (
    <View>
      <Text style={{fontSize:25}}>JSX</Text>
      <Text style={{fontSize:25}}>{name}</Text>
      <Text style={{fontSize:25}}>{4+5}</Text>
      <Text style={{fontSize:25}}>{getAge()}</Text>
    </View>
  )
}
 
export default JSX

const styles = StyleSheet.create({})