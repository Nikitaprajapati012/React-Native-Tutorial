import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { users } from 'src/screens/contact/UserContactInfo'
import ContactItems from 'src/components/ContactItems'
import styles from 'src/style/styles'

const ContactList = () => {
  const renderItem = ({item}) => <ContactItems name={item.name} email={item.email}/>
  return (
    <FlatList
    data={users}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
      ListHeaderComponent=<Text style={styles.heading}>Contacts</Text>
    />
  )
}

export default ContactList

