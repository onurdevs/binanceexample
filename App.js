import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screen/home';
import AboutScreen from './screen/about';
import Icon from 'react-native-vector-icons/FontAwesome';
const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({navigation}) => {
  return (
    <View style={{flex: 1, padding: 10}}>
      <View style={{marginLeft: 'auto'}}>
        <Icon.Button
          onPress={() => navigation.closeDrawer()}
          name="close"
          size={25}
          backgroundColor="#161A1E"
        />
      </View>
      <View>
        <TouchableOpacity style={{}}>
          <Text
            style={{
              color: '#eaecef',
              textAlign: 'center',
              padding: 10,
              borderRadius: 5,
            }}>
            Giriş Yap
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: '#fcd535', borderRadius: 5}}>
          <Text style={{textAlign: 'center', padding: 10, borderRadius: 5}}>
            Kayıt Ol
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.menuItem}>
          <Icon name="bitcoin" size={25} color="#eaecef"></Icon>
          <Text style={styles.menuLabel}>Piyasalar</Text>
        </View>
        <View style={styles.menuItem}>
          <Icon name="bitcoin" size={25} color="#eaecef"></Icon>
          <Text style={styles.menuLabel}>Al Sat</Text>
        </View>
        <View style={styles.menuItem}>
          <Icon name="bitcoin" size={25} color="#eaecef"></Icon>
          <Text style={styles.menuLabel}>Kazan</Text>
        </View>
        <View style={styles.menuItem}>
          <Icon name="bitcoin" size={25} color="#eaecef"></Icon>
          <Text style={styles.menuLabel}>Finans</Text>
        </View>
        <View style={styles.menuItem}>
          <Icon name="bitcoin" size={25} color="#eaecef"></Icon>
          <Text style={styles.menuLabel}>NFT</Text>
        </View>
        <View style={styles.menuItem}>
          <Icon name="bitcoin" size={25} color="#eaecef"></Icon>
          <Text style={styles.menuLabel}>Kurumsal</Text>
        </View>
        <View style={styles.menuItem}>
          <Icon name="bitcoin" size={25} color="#eaecef"></Icon>
          <Text style={styles.menuLabel}>Akış</Text>
        </View>
        <View style={styles.menuItem}>
          <Icon name="bitcoin" size={25} color="#eaecef"></Icon>
          <Text style={styles.menuLabel}>Akış</Text>
        </View>
        <View style={styles.menuItem}>
          <Icon name="bitcoin" size={25} color="#eaecef"></Icon>
          <Text style={styles.menuLabel}>Akış</Text>
        </View>
      </ScrollView>
    </View>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={CustomDrawerContent}
        screenOptions={{
          drawerPosition: 'right',
          drawerType: 'front',
          drawerStyle: {
            backgroundColor: '#161A1E',
          },
          drawerLabelStyle: {
            color: '#F0B90C',
          },
          headerShown: false,
        }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  menuLabel: {
    color: '#eaecef',
    fontSize: 16,
    marginLeft: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
  },
});
