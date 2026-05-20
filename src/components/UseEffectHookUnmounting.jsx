 
/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import ShowChild from 'src/components/ShowChild';

const UseEffectHookUnmounting = () => {
    const [showChild,setShowChild] = useState(true);

  return (
    <View>
      <Text style={{fontSize:30}}>Parent Component</Text>
      {showChild ? <ShowChild/> : null}
      <Button title='Toggle' onPress={() => {setShowChild(!showChild)}}/>
    </View>
  )
}

export default UseEffectHookUnmounting