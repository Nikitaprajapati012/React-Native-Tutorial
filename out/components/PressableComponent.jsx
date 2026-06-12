import { View, Text, Pressable, Alert } from 'react-native'
import React from 'react'
import styles from 'src/style/styles'

const PressableComponent = () => {
  const handlePress=()=>{
    Alert.alert('On press')
  }
  const handlePressIN=()=>{
    Alert.alert('Press IN')
  }
   const handlePressOUT=()=>{
    Alert.alert('Press OUT')
  }
  const handleLongPress=()=>{
    Alert.alert('Press LONG')
  }

  return (
    <View style={styles.pressableContainer}>
      <Pressable style={styles.pressableButton} 
      // onPress={handlePress}
      onPressIn={handlePressIN}
      onPressOut={handlePressOUT}
      onLongPress={handleLongPress} //Default value press 500 ml to call
      delayLongPress={5000} //change default press time for long press
 >
 
        <Text style={styles.pressableButtonText}>Press Me</Text>
      </Pressable>
    </View>
  )
}

export default PressableComponent


