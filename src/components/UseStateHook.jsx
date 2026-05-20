/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const UseStateHook = () => {
const [name,setName] = useState("Nikita");
const updateName = () =>
{
    setName("Nikita Prajapati")
}

  return (
    <View>
      <Text style={{fontSize:25}}>UseStateHook</Text>
      <Text style={{fontSize:25}}>Name : {name}</Text>
      {/* <Button title='Press' onPress={() => setName("Nikita Prajapati")}/> */}
      <Button title='Press' onPress={updateName}/>
    </View>
  )
}

export default UseStateHook