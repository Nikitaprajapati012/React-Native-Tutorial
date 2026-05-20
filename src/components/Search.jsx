import { View, Text, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from 'src/style/styles'

const Search = () => {
const [searchQuery,setSearchQuery] = useState('')

    const contacts = [
        {id : 1, name:"Nikita"},
        {id : 2, name:"Pranshi"},
        {id : 3, name:"Arzoo"},
        {id : 4, name:"Rinku"},
        {id : 5, name:"Khushi"},
    ]
const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
);

const renderItem = ({item})=> (
    <View style={styles.searchListItem}>
        <Text style={styles.searchTitle}>{item.name}</Text>
    </View>
) 
  return (
    <View style={styles.searchContainer}>
      <Text style={styles.searchTitle}>Search</Text>
      <TextInput
      style={styles.searchBar}
        placeholder='Search Contacts...'
        placeholderTextColor='#888'
        onChangeText={setSearchQuery}
        value={searchQuery}
      />

      <FlatList
        data={filteredContacts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.searchListContainer}
      />

    </View>
  )
}

export default Search

