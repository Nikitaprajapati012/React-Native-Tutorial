import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import styles from 'src/style/styles'

const StatusBarExample = () => {
  return (
    <View style={styles.statusBarContainer}>
    <StatusBar  
        barStyle={'light-content'}
        backgroundColor='rgba(0,0,0,0.2)'
        hidden={false}
        translucent={true}
    />
      <Text style={styles.statusBarText}>StatusBarExample</Text>
    </View>
  )
}

export default StatusBarExample

9638789453