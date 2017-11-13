import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import DateHeader from './date.js'
import { getMetricMetaInfo } from '../utils/helpers'
import { gray } from '../utils/colors'

export default MetricCard = ( {date, metrics} ) => {
  return (
    <View>
      {date && <DateHeader date={date} />}
      {Object.keys(metrics).map((metric) => {
        const { getIcons, displayName, unit, backgroundColor } = getMetricMetaInfo(metric)

        return (
          <View style={styles.metric} key={metric}>
            {getIcons()}
            <View>
              <Text style={{fontSize: 20}}>
                {displayName}
              </Text>
              <Text style={{fontSize: 16, color: gray}}>
                {metrics[metric]} {unit}
              </Text>
            </View>
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  metric: {
    flexDirection: 'row',
    marginTop: 12,
  }
})