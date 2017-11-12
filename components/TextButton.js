import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import {purple} from '../utils/colors.js'

export default TextButton = ({children, onPress, style = {}}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.reset, style]}>
      <Text>{children}</Text>
    </ TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    color: purple
  }
})