/* eslint-disable react-native/no-inline-styles */
 
import { Text, View } from 'react-native'
import React, { Component } from 'react'
import SecondClass from 'src/components/SecondClass'

class ClassComponents extends Component{

render(){
    const age = 22

    return(
        <View>
            <Text style={{fontSize:30}}>Class Components</Text>
            <SecondClass data={age}/>
        </View>
    )
}    
}

export default ClassComponents