import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Price = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.left}>
        <Text style={styles.title}>BTC / USDT</Text>
        <Text style={styles.showPrice}>17,398.80</Text>
        <View style={styles.showPricePercent}>
          <Text style={styles.changePrice}>+0.12%</Text>
          <Text style={styles.differencePrice}>+21.80</Text>
        </View>
      </View>
      <View style={styles.right}>
        <View style={styles.tickerList}>
          <Text style={styles.tickerItemLabel}>24S En Yüksek</Text>
          <Text style={styles.tickerPriceText}>17,398.80</Text>
        </View>
        <View style={styles.tickerList}>
          <Text style={styles.tickerItemLabel}>24S Hacim (BTC)</Text>
          <Text style={styles.tickerPriceText}>227,438.39</Text>
        </View>
        <View style={styles.tickerList}>
          <Text style={styles.tickerItemLabel}>24S En Düşük</Text>
          <Text style={styles.tickerPriceText}>17,128.00</Text>
        </View>
        <View style={styles.tickerList}>
          <Text style={styles.tickerItemLabel}>24s Hacim (USDT)</Text>
          <Text style={styles.tickerPriceText}>3924.69M</Text>
        </View>
      </View>
    </View>
  );
};

export default Price;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#161A1E',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tickerList: {
    marginVertical: 10,
  },
  tickerItemLabel: {
    fontSize: 10,
    color: '#848e9c',
  },
  tickerPriceText: {
    fontSize: 16,
    color: '#eaecef',
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexBasis: '50%',
    marginRight: 10,
  },
  left: {
    flexDirection: 'column',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#eaecef',
  },
  showPrice: {
    fontSize: 26,
    fontWeight: '500',
    color: 'rgb(14, 203, 129)',
  },
  showPricePercent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  changePrice: {
    fontSize: 12,
    fontWeight: '500',
    color: 'rgb(246, 70, 93)',
  },
  differencePrice: {
    fontSize: 12,
    fontWeight: '500',
    color: 'rgb(246, 70, 93)',
  },
});
