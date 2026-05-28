import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'node_modules/react-redux/dist/react-redux'
import { decrement, increment, reset } from 'src/redux/slice/CounterSlice'

const CounterRedux = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <View>
      <Text>Count : {count}</Text>
      <Button title='Increment' onPress={() => dispatch(increment())}/>
      <Button title='Decrement' onPress={() => dispatch(decrement())}/>
      <Button title='Reset'onPress={() => dispatch(reset())}/>
    </View>
  )
}

export default CounterRedux

const styles = StyleSheet.create({})