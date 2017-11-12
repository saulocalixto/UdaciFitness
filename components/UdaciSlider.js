import React from 'react';
import { View, Slider, Text, StyleSheet } from 'react-native'
import {gray} from '../utils/colors.js'

export default UdaciSlider = ({ max, unit, step, value, onChange }) => {
  return (
    <View style={styles.row}>
      <Slider 
        step={step}
        value={value}
        maximumValue={max}
        style={{flex: 1}}
        minimumValue={0}
        onValueChange={onChange}
      />
      <View style={styles.metricCounter}>
        <Text style={{fontSize: 24, textAlign: 'center'}}>{value}</Text>
        <Text style={{fontSize: 18, textAlign: 'center'}}>{unit}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row:{
    flexDirection : 'row',
    flex: 1,
    alignItems: 'center'
  },
  metricCounter: {
    width: 85,
    justifyContent: 'center',
    alignItems: 'center'
  }
})