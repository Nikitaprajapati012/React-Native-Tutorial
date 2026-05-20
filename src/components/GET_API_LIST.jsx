 
import { View, Text, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'node_modules/axios'
import styles from 'src/style/styles'

const GET_API_LIST = () => {
const [myData,setMydata] = useState([])

useEffect(()=>{
const API = "http://172.16.24.255:3000/users/";
        axios.get(API).then((response) => {
 try {
            console.log(response.data)
            setMydata(response.data)
        } catch (error) {
            Alert.alert("Error","Data Fetching Failed")
        }
        })
},[])
const renderItem = ({item}) => (
    <View style={styles.listCard}>
        <Text style={styles.listUserName}>{item.name}</Text>
        <Text style={styles.listUserEmail}>{item.email}</Text>
    </View>
)

  return (
    <View style={styles.listContainer}>
      <Text style={styles.listHeader}>Users</Text>
      <FlatList
data={myData}
renderItem={renderItem}
keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

export default GET_API_LIST