import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { CounterContext } from 'src/components/Parent'


const SubChild = () => {
  const {count, incrementCount } = useContext(CounterContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter : {count}</Text>
      <Button title='Press' onPress={incrementCount} />
    </View>
  )
}

export default SubChild

const styles = StyleSheet.create({
container : {
  flex:1,
  justifyContent:'center',
  alignContent : 'center',
},
text:{
  fontSize:26,
  fontWeight:'bold',
  marginBottom:10,
}
})