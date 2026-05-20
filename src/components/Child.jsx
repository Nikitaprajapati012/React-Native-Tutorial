import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Child = (props) => {
  console.log(props.data)
  let item = props.item

  return (
    <View>
      <Text style={{fontSize:20}}>Child : {props.data}</Text>
      <Text style={{fontSize:20}}>Items : {props.item}</Text>
    </View>
  )
}

export default Child

const styles = StyleSheet.create({})