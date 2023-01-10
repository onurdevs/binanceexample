import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({navigation}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Binance</Text>
      <View style={styles.headerRight}>
        <TouchableOpacity style={styles.registerBtn}>
          <Text style={styles.registerBtnText}>Kayıt Ol</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon.Button name="bars" size={25} backgroundColor="#161A1E" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: '#F0B90C',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  registerBtn: {
    backgroundColor: '#F0B90C',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  registerBtnText: {
    fontWeight: 'bold',
  },
});
