 
import { View, Text, Button, TouchableOpacity, TouchableHighlight, Alert } from 'react-native'
import React from 'react'
import styles from 'src/style/styles'

const StyleWithButton = () => {
  return (
    <View>
      <Button title='Basic Button' color={'red'}/>
      <TouchableOpacity style={styles.styleButton} activeOpacity={0.6}>
        <Text style={styles.styleButtonText}>Touchable Opacity</Text>
      </TouchableOpacity>

      <TouchableHighlight style={styles.styleButton} onPress={() => {Alert.alert('Hello')}} underlayColor='blue'>
        <Text style={styles.styleButtonText}>Touchable Highlight</Text>
      </TouchableHighlight>
    </View>
  )
}

export default StyleWithButton