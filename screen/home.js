import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Header from '../components/header';
import Price from '../components/price';
import Chart from '../components/chart';
import Footer from '../components/footer';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Price />
      <Chart />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: '#fff'}}>
          Giriş yap ve Şimdi Kayıt Ol alım satın için
        </Text>
      </View>
      <Footer />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161A1E',
  },
});
