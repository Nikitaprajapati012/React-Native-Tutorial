import { View, Text, Platform } from 'react-native'
import React from 'react'
import styles from 'src/style/styles'

const PlatformExample = () => {
  return (
    <View style={styles.platformContainer}>
      <Text style={styles.platformWelcomeText}>
      {Platform.OS === 'ios' ? 'Welcome IOS User!' : 'Welcome Android User!'}
      </Text>
      <Text style={styles.platformtext}>
      {
        Platform.select({
ios:'You are using IOS Device',
android:'You are using Android Device',
macos:'You are using MacOS'
      })
      }
    </Text>
    </View>
  )
}

export default PlatformExample