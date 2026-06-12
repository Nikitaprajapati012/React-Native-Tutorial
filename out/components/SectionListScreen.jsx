import { View, Text, SectionList, StyleSheet } from 'react-native'
import React from 'react'

const listItem = [
    {
        title:"Fruits",
        data : [
            {id:1, name: "Apple"},
            {id:2, name: "Grapes"},
            {id:3, name: "Mango"},
            {id:4, name: "Orange"},
            {id:5, name: "Kiwi"},
        ]
    },
    {
        title:"Vegitables",
        data : [
            {id:1, name: "Carrot"},
            {id:2, name: "Tomato"},
            {id:3, name: "Potato"},
            {id:4, name: "Chilly"},
            {id:5, name: "Coriender"},
        ]
    },
]

const SectionListScreen = () => {

    const renderItem = ({item}) => (
        <View style={styles.items}>
            <Text style={styles.title}>{item.name}</Text>
        </View>
    );

    const renderSectionHeader = ({section}) => (
        <View style={styles.headerView}>
            <Text style={styles.headerTitle}>{section.title}</Text>
        </View>
    );

  return (
    <View style={styles.container}>
    <SectionList
        sections={listItem}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item) => item.id}
    />

    </View>
  )
}

const styles = StyleSheet.create(
    {
        container:{
            backgroundColor:'#f0f0f0',
            paddingTop:15,
             
        },
        items:{
            backgroundColor:"#add8e6",
            padding:10,
            marginVertical:6,
            borderRadius:15,
        },
        title:{
            fontSize:18,
        },
        headerView:{
            backgroundColor:'#90ee90',
            padding:10,
            borderRadius:20,
            marginVertical:5,
        },
        headerTitle:{
            fontSize:20,
            fontWeight:'bold',
        },
    }
)
export default SectionListScreen

