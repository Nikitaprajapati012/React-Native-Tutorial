/* eslint-disable react-native/no-inline-styles */

import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'

class SecondClass extends Component {
     constructor(){
        super()
        this.state = {myName : 'Nikita',};
    }

    updateName = () => {
        this.setState({myName : 'Arzoo'});
    }

  render() {
    return (
      <View>
        <Text style={{fontSize:20}}>Name : {this.state.myName} Age: {this.props.data}</Text>
        <Button title="Update Name" onPress={this.updateName}/>
      </View>
    )
  }
}

export default SecondClass