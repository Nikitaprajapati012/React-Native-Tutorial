import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
import styles from 'src/style/styles'

const UseRefHook = () => {
const myRef = useRef();

const handleRef = () => {
    myRef.current.setNativeProps(
        {
            text:'Nikita Prajapati',
            fontWeight:'bold',            
            color:'white',
            backgroundColor:'purple'
        }
    )
}

  return (
    <View style={styles.useRefContainer}>
      <TextInput 
      ref={myRef}
        style={styles.useRefInput}
        placeholder='Enter Your Text'
        placeholderTextColor='#f999'
      />
      <TouchableOpacity style={styles.useRefButton} onPress={handleRef}>
        <Text style={styles.useRefButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default UseRefHook