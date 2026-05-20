/* eslint-disable react-native/no-inline-styles */
import { View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'node_modules/axios';

const GET_API = () => {

    const [myData,setMyData] = useState([]);

    useEffect(() => {
        const API = "http://172.16.24.255:3000/users";
        
        axios.get(API).then((result) => {
            // console.warn(result.data);
            setMyData(result.data);
        });

        // fetch(API).then((response) => {
        //     response.json().then((result) =>{
        //         Alert.alert("Result");
        //         // console.log('API response : '+result);
        //         console.log(result);
        //     });
        // });
    },[])

  return (
    <View>
      <Text style={{fontSize:24,marginBottom:25}}>GET API Method</Text>
      {
        myData.map((item) => (
            <Text key={item.id}
            style={{fontSize:20,marginBottom:10}}>{item.name}</Text>
        ))
      }
    </View>
  )
}

export default GET_API