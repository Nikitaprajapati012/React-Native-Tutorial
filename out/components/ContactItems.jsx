import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from 'src/style/styles'

const ContactItems = ({name,email}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  )
}

export default ContactItems


