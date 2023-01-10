import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const Chart = () => {
  return (
    <View style={styles.charts}>
      <View style={styles.tab}>
        <Text style={styles.tabTextActive}>Grafik</Text>
        <Text style={styles.tabText}>Emir Defterleri</Text>
        <Text style={styles.tabText}>Alım Satımlar</Text>
      </View>
      <View style={styles.chartGraphic}>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 20,
            borderRadius: 0,

          }}
        />
      </View>
      <View style={styles.tab}>
        <Text style={styles.tabTextActive}>Açık Emirler</Text>
        <Text style={styles.tabText}>İşlem geçmişi</Text>
        <Text style={styles.tabText}>Alım Satım geçmişi</Text>
      </View>
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  charts: {
    backgroundColor: '#161A1E',
    marginTop: 20,
  },
  tab: {
    flexDirection: 'row',
  },
  tabText: {
    color: '#848e9c',
    fontSize: 16,
    marginHorizontal: 10,
  },
  tabTextActive: {
    color: 'rgb(240, 185, 11)',
    fontSize: 16,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  chartGraphic: {
    
  }
});
