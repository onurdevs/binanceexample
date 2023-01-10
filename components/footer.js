import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.buybtn}>
        <Text style={styles.buybtnText}>Al</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sellbtn}>
        <Text style={styles.sellbtnText}>Sat</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#161A1E',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop:'auto',
        padding: 10,
    },
    buybtn:{
        backgroundColor:'rgb(14, 203, 129)',
        width: '48%',
        borderRadius: 10,
        textAlign: 'center',
        padding:10
    },
    buybtnText:{
        textAlign: 'center',
        fontSize: 14,
        color: '#eaecef',
    },
    sellbtn:{
        backgroundColor:'rgb(246, 70, 93)',
        width: '48%',
        borderRadius: 10,
        textAlign: 'center',
        padding:10
    },
    sellbtnText:{
        textAlign: 'center',
        fontSize: 14,
        color: '#eaecef',
    },   
})