import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import styles from 'src/style/styles'

const ModalDialogBox = () => {
const [modalVisible,setModalVisible] = useState(false)

  return (
    <View style={styles.modalContainer}>
      <TouchableOpacity
      style={styles.modalOpenButton}
      onPress={() => setModalVisible(true)}
      >
        <Text style={styles.modalOpenButtonText}>Show Modal</Text>
      </TouchableOpacity>

      <Modal
      visible={modalVisible}
      animationType='fade'
      transparent={true}
      onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Beautiful Modal</Text>
            <Text style={styles.modalText}>This is Beautiful Modal</Text>
            <TouchableOpacity onPress={() =>{setModalVisible(false)}} style={styles.modalCloseButton}>
              <Text style={styles.modalCloseButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ModalDialogBox


