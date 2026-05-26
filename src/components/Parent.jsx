/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react'
import FirstChild from 'src/components/FirstChild'

//Context method :=> Create , Provide , Use
export const CounterContext = createContext()

const Parent = () => {
    const [count ,setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  return (
    <CounterContext.Provider value={{count,incrementCount}}>
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <FirstChild/>
    </View>
    </CounterContext.Provider>
  )
}

export default Parent

const styles = StyleSheet.create({})