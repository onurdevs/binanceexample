import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const AboutScreen = ({navigation}) => {
  return (
    <View>
      <Text>AboutScreen</Text>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Text>Menü</Text>
        </TouchableOpacity> 
    </View>
  )
}

export default AboutScreen