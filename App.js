import React from 'react'
import { View } from 'react-native'
import { Ionicons } from "@expo/vector-icons"
import AddEntry from './components/AddEntry.js'

export default class App extends React.Component {
  componentDidMount(){

  }
  render() {
    return (
      <View>
        <AddEntry />
      </View>
    );
  }
}
