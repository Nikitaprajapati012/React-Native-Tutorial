 
 
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from 'src/style/styles'

const Loader = () => {
    const [loading,setLoading] = useState(false)
    const toggleLoader= () =>{
setLoading(!loading)
    }
  return (
    <View style={styles.loaderContainer}>
      {/* <ActivityIndicator size={'large'} color={'green'}/> */}
    <TouchableOpacity style={styles.loaderButton} onPress={toggleLoader}>
        <Text style={styles.loaderButtonText}>{loading ? 'Hide Loader' : 'Show Loader'}</Text>
    </TouchableOpacity>
    {
        loading && (
            <View style={styles.loaderViewContainer}>
                 <ActivityIndicator size={'large'} color={'green'}/>
                 <Text style={styles.loadingText}>Loading...</Text>
            </View>
        )
    }
    </View>
  )
}

export default Loader