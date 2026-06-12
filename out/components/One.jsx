import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Two from 'src/components/Two'

const One = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:24}}>One</Text>
      <Two/>
    </View>
  )
}

export default One

const styles = StyleSheet.create({})